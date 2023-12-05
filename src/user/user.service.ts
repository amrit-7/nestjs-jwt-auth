import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'Amritpal',
      password: '12345',
      email: 'amrit@gmail.com',
      age: 22,
      role: 'CEO',
    },
    {
      username: 'Naruto',
      password: '12345',
      email: 'naruto@gmail.com',
      age: 22,
      role: 'CTO',
    },
    {
      username: 'Itachi',
      password: '12345',
      email: 'itachi@gmail.com',
      age: 22,
      role: 'CTO',
    },
  ];
  findAll() {
    return this.users;
  }
  findUserByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
