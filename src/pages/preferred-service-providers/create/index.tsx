import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createPreferredServiceProvider } from 'apiSdk/preferred-service-providers';
import { preferredServiceProviderValidationSchema } from 'validationSchema/preferred-service-providers';
import { UserInterface } from 'interfaces/user';
import { ServiceProviderInterface } from 'interfaces/service-provider';
import { getUsers } from 'apiSdk/users';
import { getServiceProviders } from 'apiSdk/service-providers';
import { PreferredServiceProviderInterface } from 'interfaces/preferred-service-provider';

function PreferredServiceProviderCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PreferredServiceProviderInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createPreferredServiceProvider(values);
      resetForm();
      router.push('/preferred-service-providers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PreferredServiceProviderInterface>({
    initialValues: {
      user_id: (router.query.user_id as string) ?? null,
      service_provider_id: (router.query.service_provider_id as string) ?? null,
    },
    validationSchema: preferredServiceProviderValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Preferred Service Providers',
              link: '/preferred-service-providers',
            },
            {
              label: 'Create Preferred Service Provider',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Preferred Service Provider
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<ServiceProviderInterface>
            formik={formik}
            name={'service_provider_id'}
            label={'Select Service Provider'}
            placeholder={'Select Service Provider'}
            fetcher={getServiceProviders}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/preferred-service-providers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'preferred_service_provider',
    operation: AccessOperationEnum.CREATE,
  }),
)(PreferredServiceProviderCreatePage);
