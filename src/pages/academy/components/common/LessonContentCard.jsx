import React from 'react';

import {
  ArrowDownward,
  VisibilityOff,
  ContentCopy,
  Delete,
  Visibility,
  DragIndicator,
} from '@mui/icons-material';
import { Grid, Tooltip, IconButton } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { uuid } from '../../../../components/common/CommonFunction';
import UploadFile from '../../../../components/common/UploadFile';
import ImageSliderCard from './../ImageSliderCard';
import TextEditor from './../TextEditor';
import VideoCard from './../VideoCard';

function ContentCard(props) {
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();
  // console.log('field', field.value);
  // console.log('field name', field.name);
  const [isShow, setIsShow] = React.useState(true); // this should work for each card
  const { item, index } = props;
  // console.log('props', props);
  const RenderContent = ({ index, item }) => {
    const type = item.type;
    switch (type) {
      case 'image':
        return (
          <Grid container width="100%" my={2}>
            <Grid item xs={12}>
              <UploadFile
                name={`content[${index}].content`}
                title="Upload image"
                subtitle="You can upload maximum 200kb"
                height="320px"
              />
            </Grid>
          </Grid>
        );
      case 'video':
        return (
          <Grid container width="100%" my={2}>
            <Grid item xs={12}>
              <VideoCard
                name={`content[${index}].content`}
                isShow={isShow}
                videoIndex={index}
                item={item}
              />
            </Grid>
          </Grid>
        );

      case 'slider':
        return (
          <Grid container width="100%" my={2}>
            <Grid item xs={12}>
              <DndProvider backend={HTML5Backend}>
                <ImageSliderCard
                  name={`content[${index}].content`}
                  sliderIndex={index}
                  item={item}
                  isShow={isShow}
                />
              </DndProvider>
            </Grid>
          </Grid>
        );
      case 'wysiwyg':
        return (
          <Grid container width="100%" my={2}>
            <Grid item xs={12}>
              <TextEditor
                name={`content[${index}].content`}
                editorIndex={index}
                item={item}
                isShow={isShow}
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };
  const handleDelete = () => {
    console.log('delete index', index);
    const updatedValue = field.value.filter((_, i) => i !== index);
    setFieldValue(field.name, updatedValue);
  };
  const handleCopy = () => {
    console.log('copy index', index);
    const newItem = {
      ...item,
      id: uuid(),
    };
    setFieldValue(field.name, [
      ...field.value.slice(0, index + 1),
      newItem,
      ...field.value.slice(index + 1),
    ]);
  };
  return (
    <Grid container justifyContent={'space-between'} my={2} key={index}>
      <Grid item justifyContent={'start'}>
        <Tooltip placement="top" arrow={true} title={'Reorder content'}>
          <>
            <IconButton>
              <DragIndicator
                sx={{
                  color: '#C4C4C4',
                  height: '20px',
                  width: '20px',
                }}
              />
            </IconButton>
          </>
        </Tooltip>
      </Grid>
      <Grid item justifyContent={'end'}>
        <Tooltip placement="top" arrow={true} title={'Download content'}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ArrowDownward
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
        {!isShow ? (
          <Tooltip placement="top" arrow={true} title={'Hide content'}>
            <IconButton
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              <VisibilityOff
                sx={{
                  color: '#C4C4C4',
                  height: '20px',
                  width: '20px',
                }}
              />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip placement="top" arrow={true} title={'Show content'}>
            <IconButton
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              <Visibility
                sx={{
                  color: '#C4C4C4',
                  height: '20px',
                  width: '20px',
                }}
              />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip placement="top" arrow={true} title={'Copy content'}>
          <IconButton onClick={handleCopy}>
            <ContentCopy
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip placement="top" arrow={true} title={'Delete content'}>
          <IconButton onClick={handleDelete}>
            <Delete
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
      </Grid>
      {isShow && <RenderContent index={index} item={item} {...props} />}
    </Grid>
  );
}

ContentCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  insert: PropTypes.func,
  remove: PropTypes.func,
};

function LessonContentCard(props) {
  const [field] = useField(props);
  // console.log('field', field);
  // console.log('meta', meta);
  // console.log('helpers', helpers);
  // const { value } = field;
  // const { setValue } = helpers;
  const [contentCards, setContentCards] = React.useState(field.value || []);

  React.useEffect(() => {
    setContentCards(field.value);
  }, [field.value]);

  // drag and drop goes here
  return (
    contentCards &&
    contentCards.map((item, index) => (
      <ContentCard key={index} item={item} index={index} {...props} />
    ))
  );
}

export default LessonContentCard;
