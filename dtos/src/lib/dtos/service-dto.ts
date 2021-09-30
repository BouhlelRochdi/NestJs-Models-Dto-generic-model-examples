import { UpdateFrameworkDto } from "./frameworks-dto";
import { UpdateSmrAccountDto } from "./smr-account-dto";

// Dto
export class ServicesBaseDto {
  name: string;
  description: string;
  published: boolean;
  frameworks: UpdateFrameworkDto[];
  smrAccount: UpdateSmrAccountDto;
}

export class CreateServiceDto extends ServicesBaseDto { }
export class UpdateServiceDto extends ServicesBaseDto {
  _id?: string; //force in update to not generate new  _id
}