import React from 'react';

import { BorderColor } from '@mui/icons-material';
import {
  Card,
  Typography,
  Grid,
  IconButton,
  FormHelperText,
  Tooltip,
} from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import { PropTypes } from 'prop-types';

import UploadVideoImage from './../../../assets/upload_video_icon.png';

function VideoCard(props) {
  const [field, meta, helpers] = useField(props);
  // console.log(field)
  let file;
  return (
    <>
      <Grid container justifyContent={'end'} mt={2}>
        {field.value !== '' ? (
          <Tooltip placement="top" arrow={true} title={'Edit video'}>
            <IconButton>
              <label htmlFor={props.name} style={{ cursor: 'pointer' }}>
                <BorderColor
                  sx={{
                    color: '#C4C4C4',
                    width: '18px',
                    height: '18px',
                  }}
                />
              </label>
            </IconButton>
          </Tooltip>
        ) : null}
      </Grid>

      <>
        {field.value !== '' ? (
          <video width={'100%'} height="auto" controls>
            {/* <source src={URL.createObjectURL(field.value)} type="video/mp4" /> */}
            <source src={field.value} type="video/mp4" />
          </video>
        ) : (
          <label htmlFor={props.name}>
            <Card
              elevation={0}
              className="dottedBorder"
              sx={{
                mt: 1,
                textAlign: 'center',
                pt: 5,
                pb: 3.4,
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <img src={UploadVideoImage} alt="" />
              <Typography variant="subtitle1">Upload a video</Typography>
              <Typography variant="subtitle2" sx={{ color: '#C4C4C4' }}>
                You can upload maximum 100mb video
              </Typography>
            </Card>
          </label>
        )}
        <input
          id={props.name}
          type="file"
          accept="video/*"
          hidden
          onChange={(event) => {
            // helpers.setValue(event.target.files[0]);
            file = URL.createObjectURL(event.target.files[0]);
            helpers.setValue(file);
            // console.log('file', file);
          }}
        />
      </>

      <Grid container ml={2}>
        <FormHelperText error={true}>
          <ErrorMessage name={props.name} />
        </FormHelperText>
      </Grid>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

VideoCard.propTypes = {
  name: PropTypes.string,
  videoIndex: PropTypes.number,
  remove: PropTypes.func,
  insert: PropTypes.func,
  item: PropTypes.object,
  isShow: PropTypes.bool,
};

export default VideoCard;
