import { validator, Yup, yupResolver } from './validators';

export const addTodoSchema = Yup.object().shape({
  title: validator.string(true),
  description: validator.string(true),
});

export const addTodoResolved = yupResolver(addTodoSchema);
