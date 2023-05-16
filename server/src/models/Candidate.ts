import { Schema, model, Document } from "mongoose";

interface ICandidate extends Document {
  user: Schema.Types.ObjectId;
  curriculum: Schema.Types.ObjectId;
  job: Schema.Types.ObjectId;
}

const candidateSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    curriculum: {
      type: Schema.Types.ObjectId,
      ref: "Curriculum",
      require: true,
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<ICandidate>("Candidate", candidateSchema);
