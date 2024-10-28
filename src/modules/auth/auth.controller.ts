import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../auth/dto/auth.dto';
import { User } from 'src/common/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() data: CreateUserDto,
  ): Promise<{ user: User; accessToken }> {
    const result = await this.authService.register(data);
    return result;
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() data: LoginUserDto): Promise<{ accessToken: string }> {
    return this.authService.login(data);
  }
}
