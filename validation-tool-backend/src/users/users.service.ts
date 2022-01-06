import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      source_id: 3,
      source_type: 'user',
      last_name: 'tester',
      first_name: 'john',
      email: 'john@test.com',
      password: 'changeme',
    },
    // {
    //   userId: 2,
    //   username: 'maria',
    //   password: 'guess',
    // },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
