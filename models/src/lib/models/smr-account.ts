// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserBase } from '@mslibs/shared/front-back/user/models'

export type SmrAccountDocument = SmrAccount & Document;

@Schema()
export class SmrAccount {
  @Prop() name: string;
  @Prop() role: string;
  @Prop() type: string;// client or worker
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User' }) user: UserBase;
}

export const SmrAccountSchema = SchemaFactory.createForClass(SmrAccount);
