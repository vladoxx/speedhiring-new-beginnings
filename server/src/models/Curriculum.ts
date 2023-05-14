import { Schema, model, Document } from "mongoose";

interface ICurriculum extends Document {
  user: Schema.Types.ObjectId;
  objective: string;
  professional_experience: {
    company: string;
    job_title: string;
    start_date: string;
    end_date: string;
    job_description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
    description: string;
  }[];
  skills: {
    skill_name: string;
    experience_level: string;
  }[];
}

const curriculumSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    objective: {
      type: String,
      required: true,
      trim: true,
    },
    professional_experience: [
      {
        company: {
          type: String,
          required: true,
          trim: true,
        },
        job_title: {
          type: String,
          required: true,
          trim: true,
        },
        start_date: {
          type: String,
          required: true,
        },
        end_date: {
          type: String,
          required: true,
        },
        job_description: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    education: [
      {
        institution: {
          type: String,
          required: true,
          trim: true,
        },
        degree: {
          type: String,
          required: true,
          trim: true,
        },
        field_of_study: {
          type: String,
          required: true,
          trim: true,
        },
        start_date: {
          type: String,
          required: true,
        },
        end_date: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    skills: [
      {
        skill_name: {
          type: String,
          required: true,
          trim: true,
        },
        experience_level: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<ICurriculum>("Curriculum", curriculumSchema);
