import { UpdateSmrAccountDto } from "./smr-account-dto";

// Dto
export class CommandeBaseDto {
  name: string;
  price: string;
  status: string;
  smrAccount_id_worker: UpdateSmrAccountDto;
  smrAccount_id_customer: UpdateSmrAccountDto;
}

export class CreateCommandeDto extends CommandeBaseDto { }
export class UpdateCommandeDto extends CommandeBaseDto {
  _id?: string; //force in update to not generate new  _id
}