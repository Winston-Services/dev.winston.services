import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import Form from '../../../components/common/Form';
import AddressSection from '../../../components/common/forms/AddressSection';
import NameSection from '../../../components/common/forms/NameSection';
import PhoneTextField from '../../../components/common/PhoneTextField';
import TextField from '../../../components/common/TextField';
import UploadFile from '../../../components/common/UploadFile';

// import useUser from '../../../hooks/useUser';

const profileValidationSchema = yup.object().shape({
  username: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  middleName: yup.string(),
  title: yup.string(),
  address1: yup.string(),
  address2: yup.string(),
  phone: yup.string(),
  city: yup.string(),
  state: yup.string(),
  postalCode: yup.string(),
  country: yup.string(),
  avatar: yup.mixed(),
});

export const CreateProfile = ({ inProgress, setInProgress, handleCompleteItem }) => {
  const { row, item } = inProgress;
  const [avatarFile, setAvatarFile] = React.useState(null);

  const handleSubmit = (values) => {
    setInProgress(false);
    handleCompleteItem(row, item);
    console.log(values);
  };

  const handleClose = () => {
    setInProgress(false);
  };

  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Form
        initialValues={{
          username: '',
          firstName: '',
          lastName: '',
          middleName: '',
          title: '',
          address1: '',
          address2: '',
          phone: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          avatar: avatarFile,
        }}
        validationSchema={profileValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        <Typography variant="h4">
          <strong>In Progress</strong> : {item.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center',
            gap: 1,
          }}
        >
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                border: '1px dashed gray',
                padding: '10px',
                width: '100%',
                maxWidth: '400px',
                height: '100%',
              }}
            >
              <UploadFile
                name="avatar"
                height="100%"
                width="100%"
                setAvatarFile={setAvatarFile}
                value={avatarFile}
              />
            </Box>

            <Box>
              <TextField label="Username" name="username" size="small" />
              <Divider sx={{ marginBottom: 1 }} />
              <NameSection />
              <Divider sx={{ marginBottom: 1 }} />
              <AddressSection />
              <PhoneTextField />
            </Box>
          </Box>
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button onClick={handleClose} variant="contained" color="error">
            Close
          </Button>

          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Box>
      </Form>
    </Paper>
  );
};

CreateProfile.propTypes = {
  setInProgress: PropTypes.func.isRequired,
  inProgress: PropTypes.object.isRequired,
  handleCompleteItem: PropTypes.func.isRequired,
};

export default CreateProfile;