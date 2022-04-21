import React from 'react';

import { Paper, Grid, Typography, FormHelperText } from '@mui/material';
import { ErrorMessage, useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as UploadImage } from './../../../assets/upload_image.svg';

function UploadFile(props) {
  const { values, setFieldValue } = useFormikContext();
  const { getRootProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue(
        props.name,
        acceptedFiles.map((file) => {
          const a = URL.createObjectURL(file);
          return Object.assign(file, {
            preview: a,
          });
        })
      );
    },
  });

  const thumbs = (values[props.name] || []).map((file) => (
    <div key={file.name}>
      <div>
        <img src={URL.createObjectURL(file)} height="100%" width="100%" />
      </div>
    </div>
  ));

  //   React.useEffect(() => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   }, [files]);

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      {thumbs.length !== 0 ? (
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
        <>{/* {props.setFieldValue('image', files[0].preview)} */}</>
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
