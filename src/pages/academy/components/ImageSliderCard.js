import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
  Cancel,
} from '@mui/icons-material';
import { Grid, IconButton, Card, Typography } from '@mui/material';
import { useField } from 'formik';
// import update from 'immutability-helper';
import { PropTypes } from 'prop-types';

import UploadImage from './../../../assets/upload_image.svg';

function ImageSliderCard(props) {
  const [field, meta, helpers] = useField(props);

  // const [imageCard] = React.useState(field.value);

  // const moveCard = useCallback((dragIndex, hoverIndex) => {
  //   setImageCard((prevCards) =>
  //     update(prevCards, {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, prevCards[dragIndex]],
  //       ],
  //     })
  //   );
  // }, []);

  // console.log('field', field);
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
          {field.value?.map((image, index) => (
            <Grid key={index} pt={2} pb={1} px={2}>
              <div className="sliderImage">
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  height="150px"
                  width="150px"
                  style={{ borderRadius: '10px' }}
                />
                <div>
                  <IconButton
                    sx={{ color: 'red' }}
                    onClick={() => {
                      field.value.pop(index);
                      console.log(field.value);
                    }}
                  >
                    <Cancel />
                  </IconButton>
                </div>
              </div>
            </Grid>
          ))}
          <label htmlFor={props.name} style={{ marginTop: 5 }}>
            <Card
              elevation={0}
              sx={{
                height: '150px',
                width: '150px',
                py: 3.6,
                textAlign: 'center',
                cursor: 'pointer  ',
              }}
              className="dottedBorder"
            >
              <img src={UploadImage} alt="" height="45px" width="42px" />
              <Typography variant="subtitle2" mt={1.5}>
                Upload image
              </Typography>
            </Card>
          </label>
        </Grid>

        <input
          id={props.name}
          type="file"
          accept="image/*"
          hidden
          multiple
          onChange={(e) => {
            const files = Array.isArray(field.value) ? [...field.value] : [];
            Object.keys(e.target.files).map((key) => {
              files.push(e.target.files[key]);
            });
            helpers.setValue(files);
          }}
        />
      </Card>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

ImageSliderCard.propTypes = {
  name: PropTypes.string,
};

export default ImageSliderCard;
