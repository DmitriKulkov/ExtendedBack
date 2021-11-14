import { IsNumber, IsString } from "class-validator";

export class BanUserDto{
    @IsNumber({}, {message: 'Must be Number'})
    readonly userId: number;
    @IsString({message: 'Must be String'})
    readonly banReason: string;
}