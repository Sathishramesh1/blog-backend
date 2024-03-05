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
        "https://thersilentboy.com/wp-content/uploads/2022/09/Blogging.jpeg",
    },
  },
  { timestamps: true }
);

//model
const Story = mongoose.model("story", storySchema);

export { Story };
