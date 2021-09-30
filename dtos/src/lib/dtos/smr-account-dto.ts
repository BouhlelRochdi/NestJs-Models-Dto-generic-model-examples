// import { UserUpdateDto } from '@mslibs/shared/front-back/user/dtos';
import { UserUpdateDto } from '@mslibs/shared/front-back/user/dtos';

// Dto
export class SmrAccountBaseDto {
    name: string;
    type: string;
    role: string;
    user: UserUpdateDto;
}

export class CreateSmrAccountDto extends SmrAccountBaseDto { }
export class UpdateSmrAccountDto extends SmrAccountBaseDto {
    _id?: string; //force in update to not generate new  _id
}
