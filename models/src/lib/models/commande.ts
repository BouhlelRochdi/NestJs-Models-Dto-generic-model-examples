import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SmrAccount } from './smr-account';

export type CommandeDocument = Commande & Document;

@Schema()
export class Commande {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  status: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'SmrAccount' })
  smrAccount_id_worker: SmrAccount;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'SmrAccount' })
  smrAccount_id_customer: SmrAccount;
}

export const CommandeSchema = SchemaFactory.createForClass(Commande);
