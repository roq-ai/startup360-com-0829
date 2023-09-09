import * as yup from 'yup';

export const serviceProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  service_type: yup.string().required(),
  description: yup.string().nullable(),
  platform_id: yup.string().nullable().required(),
});
