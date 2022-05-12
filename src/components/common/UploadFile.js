import React from 'react';

import { Cancel } from '@mui/icons-material';
import {
  Card,
  Grid,
  Typography,
  FormHelperText,
  IconButton,
} from '@mui/material';
import { useFormikContext, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';

import { ReactComponent as UploadImage } from './../../assets/upload_image.svg';

function UploadFile(props) {
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = React.useState();

  return value ? (
    <div style={{ position: 'relative' }}>
      <img
        src={value}
        height={props.height}
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
    <Grid height={props.height}>
      <Card
        className="dragBox"
        elevation={0}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 3,
          textAlign: 'center',
          border: '2px dashed #6D6691',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <Grid>
          <UploadImage />
        </Grid>
        <Typography
          sx={{ fontSize: '18px', mt: 2.5, mb: 1 }}
          textAlign={'center'}
        >
          {props.title}
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign={'center'}
          sx={{ color: '#B3AFC8' }}
        >
          {props.subtitle}
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
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: 0,
            top: 0,
            left: 0,
          }}
        />
      </Card>

      <FormHelperText error={true}>
        <ErrorMessage name={props.name} />
      </FormHelperText>
    </Grid>
  );
}

UploadFile.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  height: PropTypes.string,
};

export default UploadFile;
