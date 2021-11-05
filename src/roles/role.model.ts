import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RolesCreationAttre{
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RolesCreationAttre> {
    @ApiProperty({example: '1', description: "Identificator"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Administrator', description: "Role Type"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administrator Of Smth', description: "Description Of The Role"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}