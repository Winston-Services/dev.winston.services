import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
} from '@mui/icons-material';
import { Grid, IconButton, Card, Typography } from '@mui/material';
import { useField } from 'formik';
import update from 'immutability-helper';
import { PropTypes } from 'prop-types';

import { uuid } from '../../../components/common/CommonFunction';
import UploadImage from './../../../assets/upload_image.svg';
import ImageCard from './ImageCard';

function ImageSliderCard(props) {
  const [field, meta, helpers] = useField(props);

  const [itemsImage, setItemsImage] = React.useState(field.value);
  // const [deletingImageId, setDeletingImageId] = React.useState(null);

  console.log(itemsImage);

  React.useEffect(() => {
    setItemsImage(field.value);
  }, [field, itemsImage]);

  const moveCard = React.useCallback((dragIndex, hoverIndex) => {
    setItemsImage((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = React.useCallback(
    (item, itemIndex) => {
      return (
        <ImageCard
          key={item.id}
          item={item}
          itemIndex={itemIndex}
          id={item.id}
          moveCard={moveCard}
          // deleteFunc={setDeletingImageId}
        />
      );
    },
    [moveCard]
  );

  React.useEffect(() => {
    setItemsImage(itemsImage);
  }, [itemsImage]);

  // React.useEffect(() => {
  //   const imageIndex = itemsImage.findIndex((item) => {
  //     deletingImageId === item.id;
  //   });
  //   console.log(imageIndex);

  //   // itemsImage.splice(deletingImageId, 1);
  // }, [deletingImageId, itemsImage]);

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
          {itemsImage?.map(
            (image, index) => renderCard(image, index)
            // <ImageCard key={index} item={image} itemIndex={index} />
            // <Grid key={index} pt={2} pb={1} px={2}>
            //   <div className="sliderImage">
            //     <img
            //       src={URL.createObjectURL(image)}
            //       alt=""
            //       height="150px"
            //       width="150px"
            //       style={{ borderRadius: '10px' }}
            //     />
            //     <div>
            //       <IconButton
            //         sx={{ color: 'red' }}
            //         onClick={() => {
            //           field.value.pop(index);
            //           console.log(field.value);
            //         }}
            //       >
            //         <Cancel />
            //       </IconButton>
            //     </div>
            //   </div>
            // </Grid>
          )}
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

            helpers.setValue(files);

            Object.keys(e.target.files).map((key) => {
              console.log('key', e.target.files[key]);
              files.push(e.target.files[key]);
              Object.assign(e.target.files[key], { id: uuid() });
            });
            // if (files.length === 0) {
            //   Object.keys(e.target.files).map((key) => {
            //     files.push(e.target.files[key]);
            //   });
            // } else {
            //   const newFiles = [];
            //   files.forEach((item) => {
            //     Object.keys(e.target.files).map((inputKey) => {
            //       if (item.name === e.target.files[inputKey].name) {
            //         console.log('same file name');
            //       }
            //       newFiles.push(e.target.files[inputKey]);
            //     });
            //   });
            //   console.log('newfuiles', newFiles);
            //   newFiles.forEach((item) => {
            //     files.push(item);
            //   });
            // }
            // console.log('length', files.length);
            // files?.forEach((item) => {
            //   if (item.name === e.target.files[0].name) {
            //     console.log('not uploded');
            //   } else {
            //     Object.keys(e.target.files).map((key) => {
            //       files.push(e.target.files[key]);
            //     });
            //     helpers.setValue(files);
            //   }
            // });
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
