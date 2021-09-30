import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FrameworkDocument = Framework & Document;

@Schema()
export class Framework {
  @Prop()
  name: string;
}

export const FrameworkSchema = SchemaFactory.createForClass(Framework);
