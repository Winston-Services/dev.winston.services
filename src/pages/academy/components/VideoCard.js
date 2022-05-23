import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
  BorderColor,
} from '@mui/icons-material';
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
  console.log('meta', meta);

  return (
    <>
      <Grid container justifyContent={'end'} mt={2}>
        {field.value ? (
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

        <IconButton>
          <ArrowDownward
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
        <IconButton>
          <VisibilityOff
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
        <IconButton>
          <ContentCopy
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
        <IconButton>
          <Delete
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
      </Grid>
      {field.value ? (
        <video width={'100%'} height="auto" controls>
          <source src={URL.createObjectURL(field.value)} type="video/mp4" />
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
        onChange={() => {
          helpers.setValue(event.target.files[0]);
        }}
      />
      <Grid container ml={2}>
        <FormHelperText error={true}>
          <ErrorMessage name={props.name} />
        </FormHelperText>
      </Grid>
    </>
  );
}

VideoCard.propTypes = {
  name: PropTypes.string,
};

export default VideoCard;
