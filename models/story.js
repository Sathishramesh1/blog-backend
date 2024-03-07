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
      default:"https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5321.jpg?w=740&t=st=1709817847~exp=1709818447~hmac=cd5cd19a7ff3eb1c871fa9aab03cbee25967868c000b3d8d9b3939130ad4fc9c",
    },
  },
  { timestamps: true }
);

//model
const Story = mongoose.model("story", storySchema);

export { Story };
