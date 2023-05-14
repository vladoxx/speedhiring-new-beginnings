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
  birthDate: Date;
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
      select: false, // Para não vir a senha na requisição
    },
    birthDate: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
    cpf: {
      type: String,
      trim: true,
      unique: true,
    },
    maritalStatus: {
      type: String,
      trim: true,
    },
    genderIdentity: {
      type: String,
      trim: true,
    },
    pronoun: {
      type: String,
      trim: true,
    },
    sexualOrientation: {
      type: String,
      trim: true,
    },
    ethnicity: {
      type: String,
      trim: true,
    },
    disabilities: {
      type: String,
      trim: true,
    },
    education: {
      country: {
        type: String,
        trim: true,
      },
      level: {
        type: String,
        trim: true,
      },
      institution: {
        type: String,
        trim: true,
      },
      course: {
        type: String,
        trim: true,
      },
      status: {
        type: String,
        trim: true,
      },
    },
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
