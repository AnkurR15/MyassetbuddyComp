// Validation.ts
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  id: yup.number().required('ID is required'),
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  age: yup.number().positive('Age must be a positive number').required('Age is required'),
});

export default validationSchema;
