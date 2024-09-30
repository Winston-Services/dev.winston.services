import React from 'react';

import {
  ContentCopy,
  Delete,
  DragIndicator,
  Done,
  BorderColor,
} from '@mui/icons-material';
import {
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { uuid } from '../../../components/common/CommonFunction';
import {
  setLectureEdit,
  lectureEditSelector,
  setCourseEdit,
  courseEditSelector,
} from '../../../store/academy';
import LessonCard from './LessonCard';

export default function LectureCard({
  lecture,
  lectureIndex,
  lectureLength,
  moveCard,
  id,
}) {
  const dispatch = useDispatch();
  const lectureEdit = useSelector(lectureEditSelector);
  const courseData = useSelector(courseEditSelector);
  const [editLecture, setEditLecture] = React.useState({
    id: -1,
    name: '',
  });
  const ref = React.useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.lectureIndex;
      const hoverIndex = lectureIndex;

      // console.log(dragIndex, hoverIndex);
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.lectureIndex = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: () => {
      // console.log(id, lectureIndex);
      return { id, lectureIndex };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? '0' : '1';
  preview(drop(ref));

  const renderLessonCards = (lessons) => {
    return lessons?.map((lesson, lessonIndex) => (
      <LessonCard
        key={lessonIndex}
        lesson={lesson}
        lessonIndex={lessonIndex}
        lectureIndex={lectureIndex}
        lessonLength={lecture.lesson.length}
        lectureId={lecture.id}
      />
    ));
  };

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <Grid display="flex" flexDirection={'column'} gap={1}>
        <Grid
          display={'flex'}
          alignItems="center"
          justifyContent={'space-between'}
        >
          <Grid display={'flex'} alignItems="center" gap={1}>
            <IconButton ref={drag} sx={{ cursor: 'move' }}>
              <DragIndicator sx={{ color: '#4C3B9C' }} />
            </IconButton>
            {editLecture.id === id ? (
              <TextField
                inputProps={{ style: { fontSize: 16 } }}
                sx={{ width: 'auto' }}
                variant="standard"
                value={editLecture.name}
                onChange={(e) => {
                  // update the local state
                  setEditLecture({
                    ...editLecture,
                    name: e.target.value,
                  });
                }}
              />
            ) : (
              <Typography variant="subtitle1">{lecture.name}</Typography>
            )}
            {editLecture.id === id ? (
              <Tooltip
                placement="top"
                arrow={true}
                title={'Update lecture name'}
              >
                <IconButton
                  onClick={() => {
                    // update the lecture state
                    let updatedLectures = [...lectureEdit];
                    // find the lecture to update
                    const lectureToUpdate = updatedLectures.find(
                      (l) => l.id === id
                    );
                    // create the lecture update
                    const lectureUpdate = {
                      ...lectureToUpdate,
                      name: editLecture.name,
                    };
                    // update the lecture
                    updatedLectures = updatedLectures.map((l) => {
                      if (l.id === id) {
                        return lectureUpdate;
                      }
                      return l;
                    });
                    // update the lecture state
                    dispatch(setLectureEdit(updatedLectures));
                    // update the course state
                    dispatch(
                      setCourseEdit({
                        ...courseData,
                        lectures: updatedLectures,
                      })
                    );
                    // reset the local state
                    setEditLecture({
                      id: -1,
                      name: '',
                    });
                  }}
                >
                  <Done sx={{ color: '#C4C4C4' }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip placement="top" arrow={true} title={'Edit lecture name'}>
                <IconButton
                  onClick={() => {
                    // console.log('edit lecture', lecture, editLecture);
                    setEditLecture({
                      ...lecture,
                      id: lecture.id,
                      name: lecture.name,
                    });
                    // console.log('edit lecture', lecture, editLecture);
                  }}
                >
                  <BorderColor
                    sx={{
                      color: '#C4C4C4',
                      height: '20px',
                      width: '20px',
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          <Grid>
            {lectureLength > 1 ? (
              <Tooltip placement="top" arrow={true} title={'Delete lecture'}>
                <IconButton
                  onClick={() => {
                    console.log('delete lecture', lecture);
                    const lecturesUpdated = [...lectureEdit].filter(
                      (l) => l.id !== lecture.id
                    );
                    console.log('lecturesUpdated', lecturesUpdated);
                    dispatch(setLectureEdit(lecturesUpdated));
                    dispatch(
                      setCourseEdit({
                        ...courseData,
                        lectures: lecturesUpdated,
                      })
                    );
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
            ) : null}
            <Tooltip placement="top" arrow={true} title={'Copy lecture'}>
              <IconButton
                onClick={() => {
                  //console.log('copy lecture', lecture);
                  const newLectures = [...lectureEdit];
                  const lectureCopy = {
                    ...lecture,
                    id: uuid(),
                  };
                  newLectures.splice(lectureIndex + 1, 0, lectureCopy);
                  // console.log('newLectures', newLectures);
                  dispatch(setLectureEdit(newLectures));
                  dispatch(
                    setCourseEdit({
                      ...courseData,
                      lectures: newLectures,
                    })
                  );
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
          </Grid>
        </Grid>
        {lecture && renderLessonCards(lecture.lesson)}
      </Grid>
    </div>
  );
}

LectureCard.propTypes = {
  lecture: PropTypes.object,
  lectureIndex: PropTypes.number,
  lectureLength: PropTypes.number,
  moveCard: PropTypes.func,
  id: PropTypes.string,
};
