import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';


//map type
//export class UpdateUserDto extends PartialType(CreateUserDto) {}

// khong cho cap nhat field as count
export class UpdateUserDto extends OmitType(CreateUserDto, ['password'] as const) {}