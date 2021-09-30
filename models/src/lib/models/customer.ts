
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
//dto
export interface Customer {
  name?: string;
}
// interface doc
export interface CustomerDoc extends Document {
  _id: string;
  id: string;
  name: string; 
}

// Schema
export const CustomerSchema = new mongoose.Schema({
  name: String,
});

// Duplicate the ID field.// has id instead of _id for ngrx data entity
CustomerSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
// Ensure virtual fields are serialised.
CustomerSchema.set('toJSON', {
  virtuals: true
});