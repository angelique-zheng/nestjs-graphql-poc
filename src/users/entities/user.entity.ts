import { Field, ID, ObjectType } from '@nestjs/graphql';

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
    /**
     * Do not use rowid or identity => the id will not be return by repository
     */
    @PrimaryGeneratedColumn('increment')
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    firstname: string;

    @Column()
    @Field(() => String)
    lastname: string;
}
