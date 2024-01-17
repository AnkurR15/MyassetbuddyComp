
import * as yup from 'yup';

const CellValidationSchema = yup.object({
  value: yup.string().required('Cell value is required')
  
});
export default CellValidationSchema;