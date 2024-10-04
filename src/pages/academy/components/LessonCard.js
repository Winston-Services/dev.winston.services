import React from 'react';

import {
  BorderColor,
  ContentCopy,
  Done,
  DragIndicator,
  Edit,
  InsertLink,
  Delete,
  AddBox,
  Queue,
} from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uuid } from '../../../components/common/CommonFunction';
import {
  setLectureEdit,
  lectureEditSelector,
  setLessonEdit,
  courseEditSelector,
  setCourseEdit,
} from '../../../store/academy';

export default function LessonCard({
  lesson,
  lessonIndex,
  lectureIndex,
  lessonLength,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editLesson, setEditLesson] = React.useState({
    lessonIndex: -1,
    lectureIndex: -1,
    name: '',
  });
  const courseEdit = useSelector(courseEditSelector);
  const lectureEdit = useSelector(lectureEditSelector);
  const lecture = lectureEdit[lectureIndex];

  return (
    <>
      <Grid
        key={lesson.name + lessonIndex}
        display={'flex'}
        alignItems="center"
        justifyContent={'space-between'}
        pl={3}
      >
        <Grid display={'flex'} alignItems="center" gap={1}>
          <IconButton>
            <DragIndicator sx={{ color: '#4C3B9C' }} />
          </IconButton>
          {editLesson.lessonIndex == lessonIndex &&
          editLesson.lectureIndex === lectureIndex ? (
            <>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                sx={{ width: 'auto' }}
                variant="standard"
                value={editLesson.name}
                onChange={(e) =>
                  setEditLesson({
                    ...editLesson,
                    name: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <Typography variant="subtitle2">{lesson.name}</Typography>
          )}

          {editLesson.lessonIndex == lessonIndex &&
          editLesson.lectureIndex === lectureIndex ? (
            <Tooltip placement="top" arrow={true} title={'Update lesson name'}>
              <IconButton
                onClick={() => {
                  const newLesson = {
                    ...lesson,
                    name: editLesson.name,
                  };
                  const newLessons = [...lecture.lesson];
                  newLessons[lessonIndex] = newLesson;
                  const newLecture = {
                    ...lecture,
                    lesson: newLessons,
                  };
                  const newLectures = [...lectureEdit];
                  newLectures[lectureIndex] = newLecture;
                  dispatch(setLectureEdit(newLectures));
                  dispatch(
                    setCourseEdit({
                      ...courseEdit,
                      lectures: newLectures,
                    })
                  );
                  setEditLesson({
                    ...editLesson,
                    lessonIndex: -1,
                    lectureIndex: -1,
                  });
                }}
              >
                <Done sx={{ color: '#C4C4C4' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip placement="top" arrow={true} title={'Edit lesson name'}>
              <IconButton
                onClick={() => {
                  setEditLesson({
                    name: lesson.name,
                    lectureIndex,
                    lessonIndex,
                  });
                }}
              >
                <BorderColor
                  sx={{
                    color: '#C4C4C4',
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
        <Grid display="flex" alignItems={'center'}>
          <Tooltip
            placement="top"
            arrow={true}
            title={'Count lesson for course completion'}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={lesson.isRequired}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 18,
                      color: '#FFD215',
                    },
                  }}
                  onChange={(e) => {
                    const { checked } = e.target;
                    const newLesson = {
                      ...lesson,
                      isRequired: checked,
                    };
                    const newLessons = [...lecture.lesson];
                    newLessons[lessonIndex] = newLesson;
                    const newLecture = {
                      ...lecture,
                      lesson: newLessons,
                    };
                    const newLectures = [...lectureEdit];
                    newLectures[lectureIndex] = newLecture;
                    dispatch(setLectureEdit(newLectures));
                    dispatch(
                      setCourseEdit({
                        ...courseEdit,
                        lectures: newLectures,
                      })
                    );
                  }}
                />
              }
              label="Required"
            />
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Edit lesson'}>
            <IconButton
              // onClick={() => navigate('/academy/add-lecture/edit-lesson/')}
              onClick={() => {
                dispatch(setLessonEdit(lesson));
                navigate('/academy/edit-lesson');

              }}
            >
              <Edit
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Copy lesson'}>
            <IconButton
              onClick={() => {
                const newLesson = {
                  ...lesson,
                  id: uuid(),
                  name: 'Copy of ' + lesson.name,
                };
                const newLessons = [...lecture.lesson];
                newLessons.splice(lessonIndex + 1, 0, newLesson);
                const newLecture = {
                  ...lecture,
                  lesson: newLessons,
                };
                const newLectures = [...lectureEdit];
                newLectures[lectureIndex] = newLecture;
                dispatch(setLectureEdit(newLectures));
                dispatch(
                  setCourseEdit({
                    ...courseEdit,
                    lectures: newLectures,
                  })
                );
              }}
            >
              <ContentCopy
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Lesson link'}>
            <IconButton>
              <InsertLink
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          {lessonLength > 1 ? (
            <Tooltip placement="top" arrow={true} title={'Delete lesson'}>
              <IconButton
                onClick={() => {
                  const newLessons = [...lecture.lesson];
                  newLessons.splice(lessonIndex, 1);
                  const newLecture = {
                    ...lecture,
                    lesson: newLessons,
                  };
                  const newLectures = [...lectureEdit];
                  newLectures[lectureIndex] = newLecture;
                  dispatch(setLectureEdit(newLectures));
                  dispatch(
                    setCourseEdit({
                      ...courseEdit,
                      lectures: newLectures,
                    })
                  );
                }}
              >
                <Delete
                  sx={{
                    color: '#C4C4C4',
                    width: '18px',
                    height: '18px',
                  }}
                />
              </IconButton>
            </Tooltip>
          ) : null}
          <Tooltip placement="top" arrow={true} title={'Add lesson below'}>
            <IconButton
              onClick={() => {
                const newLesson = {
                  id: uuid(),
                  name: 'Untitled lesson',
                  isRequired: false,
                  content: [],
                };
                const newLessons = [...lecture.lesson];
                newLessons.splice(lessonIndex + 1, 0, newLesson);
                const newLecture = {
                  ...lecture,
                  lesson: newLessons,
                };
                const newLectures = [...lectureEdit];
                newLectures[lectureIndex] = newLecture;
                dispatch(setLectureEdit(newLectures));
                dispatch(
                  setCourseEdit({
                    ...courseEdit,
                    lectures: newLectures,
                  })
                );
              }}
            >
              <AddBox
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" arrow={true} title={'Add lecture below'}>
            <IconButton
              onClick={() => {
                const newLectures = [...lectureEdit];
                const lectureCopy = {
                  ...lecture,
                  id: uuid(),
                  name: 'Untitled lecture',
                  lesson: [
                    {
                      id: uuid(),
                      name: 'Untitled lesson',
                      isRequired: false,
                      content: [],
                    },
                  ],
                };
                newLectures.splice(lectureIndex + 1, 0, lectureCopy);
                // console.log('newLectures', newLectures);
                dispatch(setLectureEdit(newLectures));
                dispatch(
                  setCourseEdit({
                    ...courseEdit,
                    lectures: newLectures,
                  })
                );
              }}
            >
              <Queue
                sx={{
                  color: '#C4C4C4',
                  width: '18px',
                  height: '18px',
                }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

LessonCard.propTypes = {
  lesson: PropTypes.object,
  lectureIndex: PropTypes.number,
  lessonIndex: PropTypes.number,
  lessonLength: PropTypes.number,
  moveCard: PropTypes.func,
  id: PropTypes.string,
  lectureId: PropTypes.string,
};
