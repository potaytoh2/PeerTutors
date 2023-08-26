import { Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { auth } from '../../firebaseConfig';

@Injectable()
export class AuthService {
  login(
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

  signUp(
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
