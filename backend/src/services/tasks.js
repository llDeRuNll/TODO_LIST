import { Task } from "../db/models/task.js";

export const listTasks = async ({
  search = "",
  status = "all",
  sort = "priority",
  order = "asc",
} = {}) => {
  const filter = {};

  if (search?.trim()) {
    filter.title = { $regex: search.trim(), $options: "i" };
  }

  if (status === "done") filter.isDone = true;
  if (status === "undone") filter.isDone = false;

  const sortOrder = order === "desc" ? -1 : 1;
  const sortObj = { [sort]: sortOrder, createdAt: -1 };

  return Task.find(filter).sort(sortObj).lean();
};

export const createTask = async (payload) => {
  const doc = await Task.create(payload);
  return doc.toObject();
};

export const updateTask = async (id, payload) => {
  const doc = await Task.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).lean();

  return doc;
};

export const deleteTask = async (id) => {
  const doc = await Task.findByIdAndDelete(id).lean();
  return doc;
};
