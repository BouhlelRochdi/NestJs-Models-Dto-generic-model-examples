import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
//dto
export interface Order {
  name?: string;
}
// interface doc
export interface OrderDoc extends Document {
  _id: string;
  id: string;
  name: string; 
}

// Schema
export const OrderSchema = new mongoose.Schema({
  name: String,
});

// Duplicate the ID field.// has id instead of _id for ngrx data entity
OrderSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
// Ensure virtual fields are serialised.
OrderSchema.set('toJSON', {
  virtuals: true
});