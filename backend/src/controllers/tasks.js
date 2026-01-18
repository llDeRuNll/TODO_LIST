import * as tasksService from "../services/tasks.js";

export const getTasksController = async (req, res) => {
  const { search, status, sort, order } = req.query;

  const tasks = await tasksService.listTasks({
    search,
    status,
    sort,
    order,
  });

  res.status(200).json({ data: tasks });
};

export const createTaskController = async (req, res) => {
  const task = await tasksService.createTask(req.body);
  res.status(201).json({ data: task });
};

export const updateTaskController = async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.updateTask(id, req.body);

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json({ data: task });
};

export const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteTask(id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(204).send();
};
