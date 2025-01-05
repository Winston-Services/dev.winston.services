import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import Form from '../../../components/common/Form';
import AddressSection from '../../../components/common/forms/AddressSection';
import NameSection from '../../../components/common/forms/NameSection';
import PhoneTextField from '../../../components/common/PhoneTextField';
import TextField from '../../../components/common/TextField';
import UploadFile from '../../../components/common/UploadFile';

export const Profile = ({ handleClose }) => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({
    name: {
      first: '',
      middle: '',
      last: '',
      title: '',
    },
    username: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      line3: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    avatar: '',
    bio: '',
  });

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
    bio: yup.string(),
  });

  const [avatarFile, setAvatarFile] = React.useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    setUser({
      name: {
        first: values.firstName,
        middle: values.middleName,
        last: values.lastName,
        title: values.title,
      },
      username: values.username,
      email: values.email,
      phone: {
        countryCode: values.phone.split(' ')[0],
        number: values.phone.split(' ')[1],
      },
      address: {
        line1: values.address1,
        line2: values.address2,
        line3: values.address3 || '',
        city: values.city,
        state: values.state,
        zip: values.zip,
        country: values.country,
      },
      avatar: avatarFile,
      bio: values.bio,
    });
    handleClose();
  };

  const renderEditProfile = () => {
    return (
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
          bio: '',
          avatar: avatarFile,
        }}
        validationSchema={profileValidationSchema}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">Edit Profile</Typography>

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
              <TextField label="Bio" name="bio" size="small" />
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
    );
  };

  if (open) {
    return renderEditProfile();
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4">
        Profile{' '}
        <span style={{ cursor: 'pointer', float: 'right' }}>
          <Icon onClick={() => setOpen(true)}>edit</Icon>
          <Icon onClick={handleClose}>close</Icon>
        </span>
      </Typography>
      <Box sx={{ width: '100%', p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            gap: 1,
            p: 1,
          }}
        >
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              width: '100%',
            }}
          >
            <Box
              sx={{
                padding: '10px',
                width: '33%',
                maxWidth: '400px',
                height: '100%',
              }}
            >
              <Avatar
                alt="user avatar"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h6">
                <strong>Username:</strong> {user?.username}
              </Typography>
              <Divider sx={{ marginBottom: 1 }} />
              <Typography variant="h6">
                <strong>Bio:</strong> {user?.bio}
              </Typography>
              <Divider sx={{ marginBottom: 1 }} />
              <Typography variant="h6">
                <strong>Name:</strong> {user?.name?.title} {user?.name?.first}{' '}
                {user?.name?.middle} {user?.name?.last}
              </Typography>
              <Divider sx={{ marginBottom: 1 }} />
              <Typography variant="h6">
                <strong>Address:</strong>
              </Typography>
              <Typography
                variant="body2"
                component="address"
                sx={{ ml: 2, p: 1, width: '100%' }}
              >
                {user?.address?.line1} {user?.address?.line2}{' '}
                {user?.address?.line3}
                <br />
                {user?.address?.city}, {user?.address?.state}{' '}
                {user?.address?.zip}
                <br />
                {user?.address?.country}
              </Typography>
              <Divider sx={{ marginBottom: 1 }} />
              <Typography variant="h6">
                <strong>Phone:</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{ ml: 2, p: 1, width: '100%' }}
              >
                {user?.phone?.countryCode} {user?.phone?.number}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Profile;
