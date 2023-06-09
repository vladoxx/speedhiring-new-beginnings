import { Schema, model, Document } from "mongoose";
// import bcrypt from "bcryptjs"; // biblioteca de criptografia de senhas
import { ICurriculum } from "./Curriculum";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  cep: string;
  city: string;
  state: string;
  job: string;
  curriculumId: ICurriculum["_id"];
  password: string | undefined;
  confirm_password: string | undefined;
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
    curriculumId: {
      type: String,
      ref: "Curriculum",
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false, // Para não vir a senha na requisição
    },
    confirm_password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// encriptar a senha do usuário antes de salvar no banco de dados
// userSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;
//   this.confirm_password = hash;

//   next();
// });

export default model<IUser>("User", userSchema);
