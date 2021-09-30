// Dto
export class FrameworkBaseDto {
  name: string;
}
export class CreateFrameworkDto extends FrameworkBaseDto { }
export class UpdateFrameworkDto extends FrameworkBaseDto {
  _id?: string; //force in update to not generate new  _id
}