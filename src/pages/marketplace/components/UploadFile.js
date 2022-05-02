import React from 'react';

import { Cancel } from '@mui/icons-material';
import {
  Paper,
  Grid,
  Typography,
  FormHelperText,
  IconButton,
} from '@mui/material';
import { useFormikContext, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';

import { ReactComponent as UploadImage } from './../../../assets/upload_image.svg';

function UploadFile(props) {
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = React.useState();

  return value ? (
    <div style={{ position: 'relative' }}>
      <img
        src={value}
        height="465px"
        width="100%"
        style={{ borderRadius: '20px', objectFit: 'cover' }}
      />
      <IconButton
        style={{
          position: 'absolute',
          top: '20px',
          right: '25px',
          borderRadius: '20px',
        }}
        sx={{ fontSize: 30, color: 'red' }}
        onClick={() => {
          setFieldValue(props.name, '');
          setValue('');
        }}
      >
        <Cancel />
      </IconButton>
    </div>
  ) : (
    <>
      <Paper
        className="dragBox"
        elevation={0}
        sx={{
          textAlign: 'center',
          border: '2px dashed #6D6691',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <Grid item mt={11.2}>
          <UploadImage />
        </Grid>
        <Typography
          sx={{ fontSize: '18px', mt: 2.5, mb: 1 }}
          textAlign={'center'}
        >
          Drag and drop or Upload Image,Video, Audio or 3D Model
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={'center'}
          sx={{ color: '#B3AFC8', mb: 7 }}
        >
          You can upload maximum 100MB
          <br /> File Supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, MAV, OGG,
          GLB, GLTF.
        </Typography>

        <input
          type="file"
          className="imageDragDrop"
          onChange={() => {
            setFieldValue(
              props.name,
              URL.createObjectURL(event.target.files[0])
            );
            setValue(URL.createObjectURL(event.target.files[0]));
            return;
          }}
          id="uploadFile"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: 0,
            top: 0,
            left: 0,
          }}
        />
      </Paper>

      <FormHelperText error={true}>
        <ErrorMessage name={props.name} />
      </FormHelperText>
    </>
  );
}

UploadFile.propTypes = {
  name: PropTypes.string,
};

export default UploadFile;
