import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";

export interface ICurriculum extends Document {
  userId: IUser["_id"];
  personalInfo: {
    birthDate?: string;
    nationality?: string;
    cpf?: string;
    maritalStatus?: string;
    genderIdentity?: string;
    pronoun?: string;
    sexualOrientation?: string;
    ethnicity?: string;
    disabilities?: string;
    about?: string;
  }[];
  objective: string;
  professional_experience: {
    company: string;
    country: string;
    job_title: string;
    start_date: string;
    end_date: string;
    job_description: string;
  }[];
  education: {
    _id: string;
    institution: string;
    country?: string;
    level?: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
    status?: string;
  }[];
  skills: {
    skill_name: string;
    experience_level?: string;
  }[];
  courses: {
    courseName: string;
    institution: string;
    country: string;
    startDate: string;
    endDate: string;
  }[];
  certifications: {
    certificationName: string;
    institution: string;
    country: string;
    startDate: string;
    endDate: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
}

const curriculumSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    personalInfo: {
      birth_date: {
        type: String,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      marital_status: {
        type: String,
        required: true,
        trim: true,
      },
      gender_identity: {
        type: String,
        required: true,
        trim: true,
      },
      pronouns: {
        type: String,
        required: true,
        trim: true,
      },
      sexual_orientation: {
        type: String,
        required: true,
        trim: true,
      },
      ethnicity: {
        type: String,
        required: true,
        trim: true,
      },
      disabilities: {
        type: String,
        required: true,
        trim: true,
      },
      about: {
        type: String,
        trim: true,
      },
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
        country: {
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
        country: {
          type: String,
          required: true,
          trim: true,
        },
        level: {
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
        status: {
          type: String,
          trim: true,
        },
        _id: {
          type: Schema.Types.ObjectId,
          auto: true,
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
          trim: true,
        },
      },
    ],
    courses: [
      {
        courseName: {
          type: String,
          required: true,
          trim: true,
        },
        institution: {
          type: String,
          required: true,
          trim: true,
        },
        country: {
          type: String,
          required: true,
          trim: true,
        },
        startDate: {
          type: String,
          required: true,
        },
        endDate: {
          type: String,
          required: true,
        },
      },
    ],
    certifications: [
      {
        certificationName: {
          type: String,
          required: true,
          trim: true,
        },
        institution: {
          type: String,
          required: true,
          trim: true,
        },
        country: {
          type: String,
          required: true,
          trim: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
      },
    ],
    languages: [
      {
        language: {
          type: String,
          required: true,
          trim: true,
        },
        proficiency: {
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
