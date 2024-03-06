import mongoose from "mongoose";

//schema
const storySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8414.jpg?w=740&t=st=1709709779~exp=1709710379~hmac=7bf073be0b0a008ac7fe76336cb6e3f707c1bc9554ef51fc058c1d1a13d3ceda",
    },
  },
  { timestamps: true }
);

//model
const Story = mongoose.model("story", storySchema);

export { Story };
