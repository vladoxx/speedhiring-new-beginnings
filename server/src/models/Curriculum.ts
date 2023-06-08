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
    pronouns?: string;
    sexualOrientation?: string;
    ethnicity?: string;
    disabilities?: string;
    about?: string;
  }[];
  objective: string;
  professionalExperience: {
    company: string;
    country: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    jobDescription: string;
  }[];
  education: {
    institution: string;
    country?: string;
    level?: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    status?: string;
    _id?: string;
  }[];
  skills: {
    skillName: string;
    experienceLevel?: string;
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
      birthDate: {
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
      maritalStatus: {
        type: String,
        required: true,
        trim: true,
      },
      genderIdentity: {
        type: String,
        required: true,
        trim: true,
      },
      pronouns: {
        type: String,
        required: true,
        trim: true,
      },
      sexualOrientation: {
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
    professionalExperience: [
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
        jobTitle: {
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
        jobDescription: {
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
        fieldOfStudy: {
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
        status: {
          type: String,
          trim: true,
        },
        _id: {
          type: String,
          trim: true,
        },
      },
    ],
    skills: [
      {
        skillName: {
          type: String,
          required: true,
          trim: true,
        },
        experienceLevel: {
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
