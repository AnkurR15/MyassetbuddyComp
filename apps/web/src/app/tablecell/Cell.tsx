// // Cell.tsx
// import React, { useState } from 'react';
// import './tablecell.module.scss'
// // import validationSchema from '../CellValidationSchema';

// interface CellProps {
//   value: string;
//   onEdit: (newValue: string) => void;
// }

// const Cell: React.FC<CellProps> = ({ value, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedValue, setEditedValue] = useState(value);

//   const handleDoubleClick = () => {
//     setIsEditing(true);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEditedValue(event.target.value);
//   };

//   const handleBlur = () => {
//     setIsEditing(false);
//     onEdit(editedValue);
//   };

//   return (
//     <td onDoubleClick={handleDoubleClick}>
//       {isEditing ? (
//         <input
//           type="text"
//           value={editedValue}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//       ) : (
//         value
//       )}
//     </td>
//   );
// };

// export default Cell;





import React, { useState } from 'react';
import { useFormik } from 'formik';
import CellValidationSchema from '../CellValidationSchema';

interface CellProps {
  value: string;
  onEdit: (newValue: string) => void;
}

const Cell: React.FC<CellProps> = ({ value, onEdit }) => {
  const formik = useFormik({
    initialValues: { value },
    validationSchema: CellValidationSchema,
    onSubmit: (values) => {
      onEdit(values.value);
      formik.setSubmitting(false);
    },
  });

  const handleDoubleClick = () => {
    formik.setFieldTouched('value', false);
    formik.setFieldValue('value', value);
  };

  return (
    <td onDoubleClick={handleDoubleClick}>
      {formik.isSubmitting ? (
        <span>Loading...</span>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="value"
            value={formik.values.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.value && formik.errors.value && (
            <div style={{ color: 'red' }}>{formik.errors.value}</div>
          )}
        </form>
      )}
    </td>
  );
};

export default Cell;
