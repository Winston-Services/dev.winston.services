import React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import Form from '../../../components/common/Form';
import AddressSection from '../../../components/common/forms/AddressSection';
import NameSection from '../../../components/common/forms/NameSection';
import PhoneTextField from '../../../components/common/PhoneTextField';
import TextField from '../../../components/common/TextField';
import UploadFile from '../../../components/common/UploadFile';

import useUser from '../../../hooks/useUser';
import useApi from '../../../hooks/useApi';

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
});

export const CreateProfile = ({ handleClose }) => {
  const dispatch = useDispatch();
  const user = useUser();
  console.log(user);
  const api = useApi();
  const [setMeProfile] = api.endpoints.setMeProfile.useMutation();
  const [bannerFile, setBannerFile] = React.useState(
    user.profile.banner || null
  );
  const [avatarFile, setAvatarFile] = React.useState(
    user.profile.avatar || null
  );

  const initialValues = {
    username: user.profile.username,
    bio: user.profile.bio || '',
    title: user.profile.name?.title || '',
    firstName: user.profile.name?.first || '',
    middleName: user.profile.name?.middle || '',
    lastName: user.profile.name?.last || '',
    address1: user.profile.address?.line1 || '',
    address2: user.profile.address?.line2 || '',
    address3: user.profile.address?.line3 || '',
    phone: user.profile.phone
      ? user.profile.phone.countryCode && user.profile.phone.number
        ? `${user.profile.phone.countryCode} ${user.profile.phone.number}`
        : ''
      : '',
    city: user.profile.address?.city || '',
    state: user.profile.address?.state || '',
    postalCode: user.profile.address?.zip || '',
    country: user.profile.address?.country || '',
    avatar: avatarFile,
    banner: bannerFile,
  };
  return (
    <Form
      initialValues={initialValues}
      validationSchema={profileValidationSchema}
      onSubmit={async (values) => {
        let phone = {
          countryCode: values.phone.split(' ')[0],
          number: values.phone.split(' ')[1],
        };
        await setMeProfile({
          data: {
            ...values,
            phone: phone,
          },
          token: user.info.token,
        })
          .unwrap()
          .catch((error) => {
            console.log(error);
          });

        user.setProfile(values);
        handleClose();
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            padding: '10px',
            width: '100%',
            height: '100%',
          }}
        >
          <Typography variant="h6">Profile Banner</Typography>
          <UploadFile
            name="avatar"
            height="200px"
            width="100%"
            setAvatarFile={setBannerFile}
            value={bannerFile}
          />
        </Box>
        <TextField name="bio" label="Bio" multiline rows={4} />
        <Typography variant="caption">
          You may choose to upload a custom image for your profile banner. This
          image will appear on your profile page and within the dashboard,
          enhancing your profile's visual appeal.
        </Typography>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              padding: '10px',
              width: '100%',
              maxWidth: '400px',
              height: '100%',
            }}
          >
            <Typography variant="h6">Profile Avatar</Typography>
            <UploadFile
              name="avatar"
              height="100%"
              width="100%"
              setAvatarFile={setAvatarFile}
              value={avatarFile}
            />
            <Typography variant="caption">
              You may choose to upload a custom image for your profile avatar.
              This image will appear on your profile page and within the
              dashboard, also enhancing your profile's visual appeal.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">Profile Info</Typography>
            <TextField label="Username" name="username" size="small" />
            <Divider sx={{ marginBottom: 1 }} />
            <NameSection />
            <Divider sx={{ marginBottom: 1 }} />
            <AddressSection />
            <PhoneTextField />
            <Typography variant="caption">
              Update your profile anytime, but initially set at least your
              username to avoid being seen as a guest.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, float: 'right' }}
      >
        <Button onClick={() => handleClose()} variant="contained" color="error">
          Close
        </Button>

        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </Box>
    </Form>
  );
};

CreateProfile.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateProfile;
