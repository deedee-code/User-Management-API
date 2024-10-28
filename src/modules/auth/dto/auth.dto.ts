import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEnum(['male', 'female', 'other'])
  @IsNotEmpty()
  gender: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(['user', 'admin', 'moderator', 'super_admin'])
  @IsOptional()
  role: string;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsEnum(['male', 'female', 'other'])
  @IsOptional()
  gender?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsEnum(['user', 'admin', 'moderator', 'super_admin'])
  @IsOptional()
  role: string;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status: string;
}
