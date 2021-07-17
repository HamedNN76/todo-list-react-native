import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const requiredText = '* Required';

export const validator = {
  string: (required: boolean = false, message: string = requiredText) =>
    required ? Yup.string().required(message) : Yup.string(),
};

export { Yup, yupResolver };
