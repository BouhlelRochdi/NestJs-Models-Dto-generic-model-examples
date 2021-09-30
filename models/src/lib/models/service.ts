// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Framework } from './framework';
import * as mongoose from 'mongoose';
import { SmrAccount } from './smr-account';

export type ServiceDocument = Service & Document;

@Schema()
export class Service {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  published: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Framework' }] })
  frameworks: Framework[];

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'SmrAccount' })
  smrAccount: SmrAccount;
  
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
