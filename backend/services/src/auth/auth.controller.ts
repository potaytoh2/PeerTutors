import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //url: /auth/signup post
  @Post('signup')
  async signup(
    @Body() signUpData: { email: string; password: string },
  ): Promise<{ status: number; message: string }> {
    try {
      const { email, password } = signUpData;
      const result = await this.authService.signUp(email, password);
      return { status: result.status, message: result.message };
    } catch (error) {
      return { status: error.status, message: error.message };
    }
  }
  //url: /auth/login post
  @Post('login')
  async login(
    @Body() loginData: { email: string; password: string },
  ): Promise<{ status: number; message: string }> {
    try {
      const { email, password } = loginData;
      const result = await this.authService.login(email, password);
      return { status: result.status, message: result.message };
    } catch (error) {
      return { status: error.status, message: error.message };
    }
  }
}
