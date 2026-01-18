import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 200,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },
  },
  { timestamps: true },
);

export const Task = model("Task", taskSchema);
