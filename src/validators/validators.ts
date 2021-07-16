import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const validator = {
  email: () =>
    Yup.string().email('form.error.invalidEmail').required('form.required'),
  password: () =>
    Yup.string().min(8, 'form.error.min8').required('form.required'),
  string: (required: boolean = false, message: string = 'form.required') =>
    required ? Yup.string().required(message) : Yup.string(),
  stringMaxLength: (maxLength: number) =>
    Yup.string().max(maxLength).required('form.required'),
  true: (message: string) => Yup.bool().oneOf([true], message),
};

export { Yup, yupResolver };
