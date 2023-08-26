import { Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { auth } from '../firebaseConfig';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ status: number; message: string }> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = JSON.stringify(userCredential.user);
          resolve({ status: 200, message: 'Login successful' });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject({ status: 400, message: errorMessage });
        });
    });
  }

  async signUp(
    email: string,
    password: string,
  ): Promise<{ status: number; message: string }> {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve({ status: 200, message: 'Created Successfully' });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject({ status: 400, message: errorMessage });
        });
    });
  }
}
