import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
} from '@mui/icons-material';
import { Grid, IconButton, Card, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';

import UploadImage from './../../../assets/upload_image.svg';

function ImageSliderCard(props) {
  const { setFieldValue } = useFormikContext();

  const [imageValue] = React.useState([]);
  return (
    <>
      <Grid container justifyContent={'end'} mt={2}>
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
      <Card
        elevation={0}
        className="dottedBorder"
        sx={{
          mt: 1,
          display: 'flex',
        }}
      >
        <Grid display={'flex'} sx={{ overflowX: 'auto' }}>
          {imageValue.map((image) => (
            <Grid key={image} pt={2} pb={1} px={2}>
              <img
                style={{ borderRadius: '10px' }}
                src={image}
                alt=""
                height="150px"
                width="150px"
              />
            </Grid>
          ))}
        </Grid>
        <Card
          elevation={0}
          sx={{
            width: '150px',
            py: 3.6,
            textAlign: 'center',
            position: 'relative',
          }}
          className="dottedBorder"
        >
          <img src={UploadImage} alt="" height="45px" width="42px" />
          <Typography variant="subtitle2" mt={1.5}>
            Upload image
          </Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            className="imageDragDrop"
            onChange={(e) => {
              Object.keys(e.target.files).map((key) => {
                // console.log(
                //   URL.createObjectURL(e.target.files[key])
                // );
                imageValue.push(e.target.files[key]);
                setFieldValue(props.name, imageValue);
              });
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
      </Card>
    </>
  );
}

ImageSliderCard.propTypes = {
  name: PropTypes.string,
};

export default ImageSliderCard;
