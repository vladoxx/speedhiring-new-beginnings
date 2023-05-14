import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs"; // biblioteca de criptografia de senhas

interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  cep: string;
  city: string;
  state: string;
  job: string;
  password: string;
  birthDate: String;
  nationality: string;
  cpf: string;
  maritalStatus: string;
  genderIdentity: string;
  pronoun: string;
  sexualOrientation: string;
  ethnicity: string;
  disabilities: string;
  education: {
    country: string;
    level: string;
    institution: string;
    course: string;
    status: string;
  };
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    cep: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    job: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      // select: false, // Para não vir a senha na requisição
    },
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
    education: [
      {
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
        institution: {
          type: String,
          required: true,
          trim: true,
        },
        course: {
          type: String,
          required: true,
          trim: true,
        },
        status: {
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

// encriptar a senha do usuário antes de salvar no banco de dados
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export default model<IUser>("User", userSchema);
