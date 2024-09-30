import React from 'react';

import {
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
import { PropTypes } from 'prop-types';

import { uuid } from '../../../components/common/CommonFunction';
import UploadVideoImage from './../../../assets/upload_video_icon.png';

function VideoCard(props) {
  const { item, update, insert, remove } = props;
  // console.log('props', item, update, insert, videoIndex, remove);
  let file;
  const [isShow, setIsShow] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [video, setVideo] = React.useState(item.url || false);

  return (
    <>
      <Grid container justifyContent={'end'} mt={2}>
        {isShow ? (
          <Tooltip placement="top" arrow={true} title={'Hide content'}>
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
          </Tooltip>
        ) : (
          <Tooltip placement="top" arrow={true} title={'Show content'}>
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
          </Tooltip>
        )}
        {!edit ? (
          <Tooltip placement="top" arrow={true} title={'Edit video'}>
            <IconButton onClick={() => setEdit(true)}>
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

        <Tooltip placement="top" arrow={true} title={'Copy content'}>
          <IconButton
            onClick={() => {
              // props.insert(props.videoIndex, { ...props.item, id: uuid() });
              insert({ ...item, id: uuid() });
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
        </Tooltip>
        <Tooltip placement="top" arrow={true} title={'Delete content'}>
          <IconButton
            onClick={() => {
              remove(item);
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
        </Tooltip>
      </Grid>

      {isShow ? (
        <>
          {video && !edit ? (
            <video width={'100%'} height="auto" controls>
              {/* <source src={URL.createObjectURL(field.value)} type="video/mp4" /> */}
              <source src={video} type="video/mp4" />
            </video>
          ) : null}

          {edit ? (
            <>
              <label htmlFor={item.id}>
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
                  onClick={() => {
                    let el = document.getElementById(item.id);
                    console.log('el', el, item.id);
                    if (el) {
                      el.click();
                    }
                  }}
                >
                  <img src={UploadVideoImage} alt="" />
                  <Typography variant="subtitle1">Upload a video</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#C4C4C4' }}>
                    You can upload maximum 100mb video
                  </Typography>
                </Card>
              </label>

              <input
                id={item.id}
                type="file"
                accept="video/*"
                hidden
                onChange={(event) => {
                  event.preventDefault();
                  file = URL.createObjectURL(event.target.files[0]);
                  setVideo(file);
                  setEdit(false);
                  update({ ...item, url: file });
                }}
              />
            </>
          ) : null}
        </>
      ) : (
        <></>
      )}

      <Grid container ml={2}>
        <FormHelperText error={true}>
          {/* {<ErrorMessage name={props.name} />} */}
        </FormHelperText>
      </Grid>
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
}

VideoCard.propTypes = {
  name: PropTypes.string,
  videoIndex: PropTypes.number,
  remove: PropTypes.func,
  insert: PropTypes.func,
  item: PropTypes.object,
  update: PropTypes.func,
};

export default VideoCard;
