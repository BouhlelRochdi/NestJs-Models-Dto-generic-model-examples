
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
//dto
export interface Worker {
  name?: string;
}
// interface doc
export interface WorkerDoc extends Document {
  _id: string;
  id: string;
  name: string; 
}

// Schema
export const WorkerSchema = new mongoose.Schema({
  name: String,
});

// Duplicate the ID field.// has id instead of _id for ngrx data entity
WorkerSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
// Ensure virtual fields are serialised.
WorkerSchema.set('toJSON', {
  virtuals: true
});