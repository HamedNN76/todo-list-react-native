import { validator, Yup, yupResolver } from './validators';

export const editTodoSchema = Yup.object().shape({
  title: validator.string(true),
  description: validator.string(true),
});

export const editTodoResolved = yupResolver(editTodoSchema);
