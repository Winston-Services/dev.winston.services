import React from 'react';

// import { DeleteOutline } from '@mui/icons-material';
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
import { useDropzone } from 'react-dropzone';

import { ReactComponent as UploadImage } from './../../../assets/upload_image.svg';

function UploadFile(props) {
  const { values, setFieldValue } = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    noClick: !values,
    accept: 'image/*',
    onDrop:
      values &&
      ((acceptedFiles) => {
        // console.log('onDrop method call');
        setFieldValue(
          props.name,
          acceptedFiles.map((file) => {
            const a = URL.createObjectURL(file);
            return Object.assign(file, {
              preview: a,
            });
          })
        );
      }),
  });
  // console.log('getRootProps', { getRootProps: getRootProps(), otherProps });

  const thumbs = (values[props.name] || []).map((file) => (
    <div key={file.name}>
      <div style={{ position: 'relative' }}>
        <img
          src={URL.createObjectURL(file)}
          height="465px"
          width="575px"
          style={{ borderRadius: '20px', objectFit: 'contain' }}
        />
        {
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
            }}
          >
            <Cancel />
          </IconButton>
        }
      </div>
    </div>
  ));

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      {values && thumbs.length !== 0 ? (
        <aside>{thumbs}</aside>
      ) : (
        <Paper
          elevation={0}
          sx={{
            textAlign: 'center',
            border: '2px dashed #6D6691',
            cursor: 'pointer',
          }}
        >
          {values && <input {...getInputProps()} />}
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
        </Paper>
      )}
      {thumbs.length !== 0 ? (
        <></>
      ) : (
        <FormHelperText error={true}>
          <ErrorMessage name={props.name} />
        </FormHelperText>
      )}
    </div>
  );
}

UploadFile.propTypes = {
  name: PropTypes.string,
};

export default UploadFile;
