import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
  BorderColor,
  Visibility,
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
// import { useSelector, useDispatch } from 'react-redux';

// import { uuid } from '../../../components/common/CommonFunction';

import { uuid } from '../../../components/common/CommonFunction';
import UploadVideoImage from './../../../assets/upload_video_icon.png';
// import { lessonSelector, deleteVideoCard } from './../../../store/academy';

function VideoCard(props) {
  const [field, meta, helpers] = useField(props);
  let file;

  const [isShow, setIsShow] = React.useState(true);

  // const courseData = useSelector(courseSelector);
  // const lessonData = useSelector(lessonSelector);
  // console.log('lessonData', lessonData);

  // courseData.category.map((category) => {
  //   category.lesson.map((lesson) => {
  //     lesson.content.map((content) => {
  //       console.log('content', content.id);
  //     });
  //   });
  // });

  // const dispatch = useDispatch();

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

        <IconButton
          onClick={() => {
            console.log('field.value', field.value);
          }}
        >
          <a href={field.value} download>
            <ArrowDownward
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </a>
        </IconButton>
        {isShow ? (
          <IconButton
            onClick={() => {
              setIsShow(false);
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
        ) : (
          <IconButton
            onClick={() => {
              setIsShow(true);
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
        )}

        <IconButton
          onClick={() => {
            props.insert(props.videoIndex, { ...props.item, id: uuid() });
            console.log('props', props);
            // dispatch(
            //   addVideoCard({
            //     id: lessonSelectorData.id,
            //     data: { ...lessonSelectorData.content, id: uuid() },
            //   })
            // );
          }}
        >
          <ContentCopy
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            // const index = field.findIndex(
            //   (value) => value.id === deletingImageId
            // );
            // itemsImage.splice(index, 1);
            // field.value.splice(index, 1);
            props.remove(props.videoIndex);
            // dispatch(
            //   deleteVideoCard({
            //     category_id: lessonData.categoryId,
            //     lesson_id: lessonData.id,
            //     contentId: props.videoIndex,
            //   })
            // );
          }}
        >
          <Delete
            sx={{
              color: '#C4C4C4',
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
      </Grid>

      {isShow ? (
        <>
          {field.value ? (
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
      ) : (
        <></>
      )}

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
};

export default VideoCard;
