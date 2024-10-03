import React from 'react';

import { Grid, Card, Typography } from '@mui/material';
import { useField } from 'formik';
import { PropTypes } from 'prop-types';

import { uuid } from '../../../components/common/CommonFunction';
import UploadImage from './../../../assets/upload_image.svg';
import ImageCard from './ImageCard';

function ImageSliderCard(props) {
  const [field, meta, helpers] = useField(props);
  // console.log('value', field.value);
  const [itemsImage, setItemsImage] = React.useState(field.value);

  React.useEffect(() => {
    setItemsImage(field.value);
  }, [field, itemsImage]);

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      let imageUpdate = [...itemsImage];
      const [removed] = imageUpdate.splice(dragIndex, 1);
      imageUpdate.splice(hoverIndex, 0, removed);
      setItemsImage(imageUpdate);
      helpers.setValue(imageUpdate);
    },
    [helpers, itemsImage]
  );

  const removeImageItem = React.useCallback(
    (deletingImageId) => {
      if (itemsImage) {
        const index = itemsImage.findIndex(
          (value) => value.id === deletingImageId
        );
        let imageUpdate = [...itemsImage];
        imageUpdate.splice(index, 1);
        setItemsImage(imageUpdate);
        helpers.setValue(imageUpdate);
      }
    },
    [helpers, itemsImage]
  );

  const renderCard = React.useCallback(
    (item, itemIndex) => {
      return (
        <ImageCard
          key={itemIndex}
          item={item}
          itemIndex={itemIndex}
          id={item.id}
          removeImageItem={removeImageItem}
          moveCard={moveCard}
        />
      );
    },
    [moveCard, removeImageItem]
  );

  React.useEffect(() => {
    setItemsImage(itemsImage);
  }, [itemsImage]);

  return (
    <>
      <Card
        elevation={0}
        className="dottedBorder"
        sx={{
          mt: 1,
          display: 'flex',
        }}
      >
        <Grid display={'flex'} sx={{ overflowX: 'auto' }}>
          {itemsImage?.map((image, index) => renderCard(image, index))}
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
            let file = [...field.value];
            Object.keys(e.target.files).map((key) => {
              file.push({
                id: uuid(),
                name: URL.createObjectURL(e.target.files[key]),
              });
            });
            helpers.setValue(file);
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
  sliderIndex: PropTypes.number,
  item: PropTypes.object,
};

export default ImageSliderCard;
