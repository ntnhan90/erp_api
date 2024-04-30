import { IsEmail, IsNotEmpty } from 'class-validator';

//data transfer object
export class CreateUserDto {
    @IsNotEmpty({ message: 'Email khong duoc de trong'})
    @IsEmail({}, { message: 'Email khong dung dinh dang'})
    email: string;

    @IsNotEmpty({ message: 'Password khong duoc de trong'})
    password: string;

    @IsNotEmpty({ message: 'Name khong duoc de trong'})
    name: string;

    address: string;
}
