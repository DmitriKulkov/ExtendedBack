import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'exampe@exmail.com', description: "Email"})
    @IsString({message: 'Must be String'})
    @IsEmail({}, {message: 'Wrong Email'})
    readonly email: string;
    @ApiProperty({example: 'qwerty123', description: "Password"})
    @IsString({message: 'Must be String'})
    @Length(4, 16, {message: 'Must be less than 16 and greater than 4 symbols'})
    readonly password: string;
}