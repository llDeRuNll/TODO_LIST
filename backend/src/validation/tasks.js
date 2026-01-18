import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200).required(),
  priority: Joi.number().integer().min(1).max(10).default(5),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200),
  priority: Joi.number().integer().min(1).max(10),
  isDone: Joi.boolean(),
}).min(1);
