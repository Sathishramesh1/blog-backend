import mongoose from "mongoose";


//userschema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  activationToken: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  randomString: String,
  randomStringExpires: Date,
});


//usermodel
const User = mongoose.model("user", userSchema);

export { User };
