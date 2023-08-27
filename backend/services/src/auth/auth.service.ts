import { Injectable } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { auth } from '../firebaseConfig';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Student } from 'src/student/student.entity';
import { UserAccountType, UserGender } from 'src/user/user.enum';
import { CreatedBy, InstituteId } from 'src/common/common';

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
        .then(async (userCredential) => {
          const user = userCredential.user;
          // Create corresponding user record in your user repository
          const newUser = this.userRepository.create({
            name: 'default',
            email: user.email,
            gender: UserGender.Male,
            account_type: UserAccountType.Student,
            institute_id: InstituteId.SMU,
            created_by: CreatedBy.Default,
          });
          await this.userRepository.save(newUser);
          const newStudent = this.studentRepository.create({
            user_id: newUser.id,
            created_by: CreatedBy.Default,
          });

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
