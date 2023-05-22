import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserRequest } from './dtos/user-create.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    /**
     * If name isn't defined the query will take the function's name
     */
    @Query(() => [User], { name: 'users' })
    public async getAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Mutation(() => User)
    public async createUser(@Args('request') request: CreateUserRequest): Promise<User> {
        return await this.userService.createUser(request);
    }

    @Mutation(() => Boolean)
    public async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
        return await this.userService.deleteUser(id);
    }
}
