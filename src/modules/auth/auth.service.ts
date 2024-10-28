import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  User,
  UserGender,
  UserRole,
  UserStatus,
} from '../../common/entities/user.entity';
import { CreateUserDto, LoginUserDto } from '../auth/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto): Promise<{ user: User; accessToken }> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.usersRepository.create({
      ...data,
      password: hashedPassword,
      gender: data.gender as UserGender,
      role: data.role as UserRole,
      status: data.status as UserStatus,
    });
    await this.usersRepository.save(user);

    const accessToken = await this.generateToken(user);

    return { user, accessToken };
  }

  async login(data: LoginUserDto): Promise<{ user: User; accessToken }> {
    const user = await this.findUserByEmail(data.email);

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateToken(user);

    return { user, accessToken };
  }

  private async findUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  private generateToken(user: any) {
    const payload = { username: user.email, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
