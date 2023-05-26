import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface ICompany extends Document {
  corporate_name: string;
  sector: string;
  cnpj: string;
  email: string;
  website?: string;
  description_company?: string;
  address: string;
  phone: string;
  password: string;
  confirm_password: string;
  receivedCurriculums?: {
    user: Schema.Types.ObjectId;
    curriculum: Schema.Types.ObjectId;
    receivedDate: Date;
  }[];
  jobs?: string[];
}

const companySchema = new Schema(
  {
    corporate_name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    sector: {
      type: String,
      require: true,
      trim: true,
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
    description_company: {
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
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    confirm_password: {
      type: String,
      require: true,
      trim: true,
      select: false,
    },
    receivedCurriculums: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        curriculum: {
          type: Schema.Types.ObjectId,
          ref: "Curriculum",
        },
        receivedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

companySchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export default model<ICompany>("Company", companySchema);
