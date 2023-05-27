import { Schema, model, Document } from "mongoose";
import { ICompany } from "./Company";

export interface IJob extends Document {
  jobTitle: string;
  professionalArea: string;
  hierarchicalLevel: string;
  workday: string;
  workModel: string;
  educationLevel: string;
  contractType: string;
  salary: number;
  jobDescription: string;
  companyName: string;
  email: string;
  companyId: ICompany["_id"];
  state: string;
}

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    professionalArea: {
      type: String,
      required: true,
      trim: true,
    },
    hierarchicalLevel: {
      type: String,
      required: true,
      trim: true,
    },
    workday: {
      type: String,
      required: true,
      trim: true,
    },
    workModel: {
      type: String,
      required: true,
      trim: true,
    },
    educationLevel: {
      type: String,
      required: true,
      trim: true,
    },
    contractType: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      require: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<IJob>("Job", jobSchema);
