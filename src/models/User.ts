import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  coins: number;
}

const UserSchema = new Schema<UserDocument>({
  username: {
    type: String,
    unique: true,
    required: [true, "Por favor ingresa un nombre de usuario"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Por favor ingrese un correo electrónico"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Por favor ingrese una contraseña"],
  },
  coins: {
    type: Number,
    trim: true,
    required: [true, "Por favor ingrese los coins"],
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
