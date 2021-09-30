import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PartialType } from '@nestjs/mapped-types';


export class CreateGenericModelDto {
  readonly name: string;
  readonly description: string;
}
export class UpdateGenericModelDto extends PartialType (CreateGenericModelDto){}
 

export type GenericModelDocument = GenericModel & Document;

@Schema()
export class GenericModel {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const GenericModelSchema = SchemaFactory.createForClass(GenericModel);
