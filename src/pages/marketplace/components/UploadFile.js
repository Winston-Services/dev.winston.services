import React from 'react';

// import { DeleteOutline } from '@mui/icons-material';
import { Cancel } from '@mui/icons-material';
import {
  Paper,
  Grid,
  Typography,
  FormHelperText,
  IconButton,
  Box,
  CircularProgress,
} from '@mui/material';
import { useFormikContext, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as UploadImage } from './../../../assets/upload_image.svg';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function UploadFile(props) {
  const { values, setFieldValue } = useFormikContext();
  const [progress, setProgress] = React.useState(20);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

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
        {progress === 100 ? (
          <>
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
          </>
        ) : (
          <CircularProgressWithLabel value={progress} />
        )}
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
