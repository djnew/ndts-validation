import * as Joi from 'joi';

export const TestUserSchema = Joi.object().keys({
  name: Joi.string().min(3).max(15).required(),
  fullName: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  param1: Joi.string().optional(),
  agreement: Joi.boolean().required(),
});
