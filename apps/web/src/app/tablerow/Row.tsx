
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './tablerow.module.scss'

interface TableRowProps {
  data: { id: number; age: number; firstName: string; lastName: string;};
  onEdit: (newData: { id: number; age: number; firstName: string; lastName: string; }) => void;
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
        // fullName: `${values.firstName} ${values.lastName}`,
      };
      onEdit(updatedData);
      setEditedData(updatedData); // Optionally update local state if needed
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.handleChange(e);
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    formik.handleSubmit();

    // Check if all fields are non-empty before saving
    const areAllFieldsFilled = Object.values(formik.values).every((value) => value !== '');

    if (formik.isValid && areAllFieldsFilled) {
      const updatedData = {
        ...editedData,
        ...formik.values,
        // fullName: `${formik.values.firstName} ${formik.values.lastName}`,
      };
      onEdit(updatedData);
      setEditedData(updatedData); // Optionally update local state if needed
    }
  };

  return (
    <>
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
            className={`${
              formik.touched.age && formik.errors.age ? 'error' : ''
            } ${
              formik.isValid && formik.values.age ? 'saved' : ''
            }`}
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
            className={`${
              formik.touched.firstName && formik.errors.firstName? 'error' : ''
            } ${
              formik.isValid && formik.values.firstName ? 'saved' : ''
            }`}
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
            className={`${
              formik.touched.lastName && formik.errors.lastName ? 'error' : ''
            } ${
              formik.isValid && formik.values.lastName ? 'saved' : ''
            }`}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </td>
        {/* <td>{data.fullName}</td> */}
      </tr>
      {/* {isEditing && (
        <form onSubmit={formik.handleSubmit}>
          <button type="submit">Save</button>
        </form>
      )} */}
    </>
  );
};

export default TableRow;

