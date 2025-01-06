import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';

import Form from '../../../../components/common/Form';
import TextField from '../../../../components/common/TextField';
import useApi from '../../../../hooks/useApi';
import useUser from '../../../../hooks/useUser';

export const AddRole = () => {
  const user = useUser();
  const apiInstance = useApi();
  const { useMutation: useAddRoleMutation } = apiInstance.endpoints.addRole;
  const [addRole] = useAddRoleMutation();

  const validationSchema = yup.object().shape({
    role: yup.string().required('Role is required'),
  });
  const handleSubmit = (values) => {
    console.log(values, user.info.token);
    addRole({ data: { name: values.role }, token: user.info.token });
  };

  return (
    <Box>
      <Typography variant="h4">Add Role</Typography>
      <Box>
        <Form initialValues={{ role: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <TextField label="Role Name" name="role" />
          <Button variant="contained" color="success" type="submit">
            Add Role
          </Button>
        </Form>
      </Box>
    </Box>
  );
};

export default AddRole;
