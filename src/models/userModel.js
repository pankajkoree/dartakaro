import mongoose from "mongoose";

// _id,id,firstName,lastName,DOB,email,gender,postalCode,country,countryCode

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    required: [true, "please provide the first name"],
  },
  lastName: {
    type: String,
    required: [true, "please provide the last name"],
  },
  DOB: {
    type: Date,
    required: [true, "please provide the date of birth"],
  },
  email: {
    type: String,
    required: [true, "please enter the email"],
  },
  gender: {
    type: String,
    required: [true, "please enter the gender"],
  },
  postalCode: {
    type: Number,
    required: [true, "please enter the postal code"],
  },
  country: {
    type: String,
    required: [true, "please enter the country name"],
  },
  countryCode: {
    type: Number,
    required: [true, "please enter the country code"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
