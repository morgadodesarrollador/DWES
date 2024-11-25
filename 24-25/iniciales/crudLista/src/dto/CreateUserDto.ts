import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    email: string;
    
    @IsString()
    password: string;

    @IsNumber()
    edad: number;
}