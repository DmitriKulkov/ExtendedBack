import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'exampe@exmail.com', description: "Email"})
    readonly email: string;
    @ApiProperty({example: 'qwerty123', description: "Password"})
    readonly password: string;
}