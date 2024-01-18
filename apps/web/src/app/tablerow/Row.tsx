
// import React, { useState } from 'react';

// interface TableRowProps {
//   data: { id: number; age: number; firstName: string; lastName: string; fullName: string };
//   onEdit: (newData: { id: number; age: number; firstName: string; lastName: string; fullName: string }) => void;
//   isEditing: boolean;
// }

// const TableRow: React.FC<TableRowProps> = ({ data, onEdit, isEditing }) => {
//   const [editedData, setEditedData] = useState(data);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = () => {
//     const updatedData = {
//       ...editedData,
//       fullName: `${editedData.firstName} ${editedData.lastName}`,
//     };
//     onEdit(updatedData);
//   };

//   return (
//     <tr>
//       <td>{data.id}</td>
//       <td>
//         <input type="number" name="age" value={editedData.age} onChange={handleChange} readOnly={!isEditing} />
//       </td>
//       <td>
//         <input type="text" name="firstName" value={editedData.firstName} onChange={handleChange} readOnly={!isEditing} />
//       </td>
//       <td>
//         <input type="text" name="lastName" value={editedData.lastName} onChange={handleChange} readOnly={!isEditing} />
//       </td>
//       <td>{data.fullName}</td>
//     </tr>
//   );
// };

// export default TableRow;


// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// interface TableRowProps {
//   data: { id: number; age: number; firstName: string; lastName: string; fullName: string };
//   onEdit: (newData: { id: number; age: number; firstName: string; lastName: string; fullName: string }) => void;
//   isEditing: boolean;
// }

// const TableRow: React.FC<TableRowProps> = ({ data, onEdit, isEditing }) => {
//   const [editedData, setEditedData] = useState(data);

//   const validationSchema = Yup.object({
//     age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       age: editedData.age,
//       firstName: editedData.firstName,
//       lastName: editedData.lastName,
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       const updatedData = {
//         ...editedData,
//         ...values,
//         fullName: `${values.firstName} ${values.lastName}`,
//       };
//       onEdit(updatedData);
//     },
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     formik.handleChange(e);
//     setEditedData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = () => {
//     formik.handleSubmit();

//     if (formik.isValid) {
//       const updatedData = {
//         ...editedData,
//         ...formik.values,
//         fullName: `${formik.values.firstName} ${formik.values.lastName}`,
//       };
//       onEdit(updatedData);
//     }
//   };

//   return (
//     <tr>
//       <td>{data.id}</td>
//       <td>
//         <input
//           type="number"
//           name="age"
//           value={formik.values.age}
//           onChange={handleChange}
//           readOnly={!isEditing}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
//       </td>
//       <td>
//         <input
//           type="text"
//           name="firstName"
//           value={formik.values.firstName}
//           onChange={handleChange}
//           readOnly={!isEditing}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//       </td>
//       <td>
//         <input
//           type="text"
//           name="lastName"
//           value={formik.values.lastName}
//           onChange={handleChange}
//           readOnly={!isEditing}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//       </td>
//       <td>{data.fullName}</td>
//       {isEditing && <button onClick={handleSave}>Save</button>}
//     </tr>
//   );
// };

// export default TableRow;






import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TableRowProps {
  data: { id: number; age: number; firstName: string; lastName: string; fullName: string };
  onEdit: (newData: { id: number; age: number; firstName: string; lastName: string; fullName: string }) => void;
  isEditing: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ data, onEdit, isEditing }) => {
  const [editedData, setEditedData] = useState(data);

  const validationSchema = Yup.object({
    age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
    firstName: Yup.string().matches(/^[A-Za-z]+$/, 'First Name must only contain letters').required('First Name is required'),
    lastName: Yup.string().matches(/^[A-Za-z]+$/, 'Last Name must only contain letters').required('Last Name is required'),
  });

  const formik = useFormik({
    initialValues: {
      age: editedData.age,
      firstName: editedData.firstName,
      lastName: editedData.lastName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const updatedData = {
        ...editedData,
        ...values,
        fullName: `${values.firstName} ${values.lastName}`,
      };
      onEdit(updatedData);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.handleChange(e);
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

const handleSave = () => {
    formik.handleSubmit();
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={handleChange}
          readOnly={!isEditing}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
      </td>
      <td>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={handleChange}
          readOnly={!isEditing}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </td>
      <td>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={handleChange}
          readOnly={!isEditing}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </td>
      <td>{data.fullName}</td>
      {isEditing && <button onClick={handleSave}>Save</button>} 
    </tr>
  );
};

export default TableRow;
