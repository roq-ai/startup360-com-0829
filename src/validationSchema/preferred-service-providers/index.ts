import * as yup from 'yup';

export const preferredServiceProviderValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  service_provider_id: yup.string().nullable().required(),
});
