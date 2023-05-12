import { Schema, model, Document } from "mongoose";

interface ICompany extends Document {
  corporate_name: string;
  cnpj: string;
  email: string;
  website: string;
  address: string;
  phone: string;
  job: string;
  password: string;
}

const companySchema = new Schema(
  {
    corporate_name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    cnpj: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    website: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      require: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    job: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<ICompany>("Company", companySchema);
