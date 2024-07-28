import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    id: { type: String, required: [true, "454545 "] },
    name: { type: String, required: false },
    email: String,
    age: Number,
    phone: {
      type: Number,
    },
  },
  { timeStamps: true }
);

const User = model("User", userSchema);
export default User;

