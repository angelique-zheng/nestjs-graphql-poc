import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateUserRequest } from './dtos/user-create.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    public async createUser(request: CreateUserRequest): Promise<User> {
        try {
            const user = this.usersRepository.create(request);
            return await this.usersRepository.save(user);
        } catch (error) {
            throw Error(`Error during user creation: ${error}`);
        }
    }
    public async deleteUser(id: User['id']): Promise<boolean> {
        try {
            const deleteResult = await this.usersRepository.delete({ id });
            return deleteResult.affected == 1;
        } catch (error) {
            console.error('Error during user deletion: ', error);
            return false;
        }
    }
}
