import { Schema, model } from "mongoose";

const userSchema = Schema({
  id: { type: String, required: true },
  name: String,
  email: String,
  age: Number,
  phone: {
    type: Number,
  },
});

const User = model("User", userSchema);
export default User;
