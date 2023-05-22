import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserRequest {
    @Field(() => String)
    firstname: string;

    @Field(() => String)
    lastname: string;
}
