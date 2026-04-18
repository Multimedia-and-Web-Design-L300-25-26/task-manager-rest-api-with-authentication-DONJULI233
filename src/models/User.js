import mongoose from "mongoose";

<<<<<<< HEAD
=======

>>>>>>> 26cd7c3dafbb1c2a8566f29e8f41af37520be5a7
// Create User schema
// Fields:
// - name (String, required)
// - email (String, required, unique)
// - password (String, required, minlength 6)
// - createdAt (default Date.now)

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false, // Don't return password by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
=======


const userSchema = new mongoose.Schema({
  // Students implement
>>>>>>> 26cd7c3dafbb1c2a8566f29e8f41af37520be5a7
});

const User = mongoose.model("User", userSchema);

<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> 26cd7c3dafbb1c2a8566f29e8f41af37520be5a7
