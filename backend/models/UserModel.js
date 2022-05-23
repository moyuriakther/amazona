import mongoose from "mongoose";
// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: false},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
