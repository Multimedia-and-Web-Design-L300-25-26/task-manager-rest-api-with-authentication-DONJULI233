import mongoose from "mongoose";

// Create Task schema
// Fields:
// - title (String, required)
// - description (String)
// - completed (Boolean, default false)
// - owner (ObjectId, ref "User", required)
// - createdAt (default Date.now)

const taskSchema = new mongoose.Schema({
<<<<<<< HEAD
  title: {
    type: String,
    required: [true, "Please provide a task title"],
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
=======
  
>>>>>>> 26cd7c3dafbb1c2a8566f29e8f41af37520be5a7
});

const Task = mongoose.model("Task", taskSchema);

<<<<<<< HEAD
export default Task;
=======
export default Task;
>>>>>>> 26cd7c3dafbb1c2a8566f29e8f41af37520be5a7
