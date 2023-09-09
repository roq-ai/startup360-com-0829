import * as yup from 'yup';

export const accountValidationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
