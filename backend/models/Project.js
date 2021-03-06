import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },  
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
