import React from 'react';

import { Card } from '@mui/material';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  courseEditSelector,
  courseSelector,
  setLectureEdit,
  lectureEditSelector,
  setCourseEdit,
} from './../../../store/academy';
import LectureCard from './LectureCard';

function CourseCard({ editMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseData = useSelector(
    editMode ? courseEditSelector : courseSelector
  );
  const lectures = useSelector(lectureEditSelector);
  // console.log('course card courseData', courseData, lectures);

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      let updatedLectures = update(lectures, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, lectures[dragIndex]],
        ],
      });
      dispatch(setLectureEdit(updatedLectures));
      dispatch(setCourseEdit({
        ...courseData,
        lectures: updatedLectures,
      }));
    },
    [dispatch, lectures, courseData]
  );

  React.useEffect(() => {
    // console.log('lectures', lectures);
    // console.log('courseData.lectures', courseData);
    if (!lectures) {
      if (!courseData) {
        navigate('/academy/add-course');
      } else {
        dispatch(setLectureEdit(courseData.lectures));
      }
    }
    return () => {
      return false;
    };
  }, [lectures, courseData, dispatch, navigate]);

  const renderCard = React.useCallback(
    (lecture, lectureIndex) => {
      // console.log(lecture.id);
      return (
        <LectureCard
          key={lecture.id}
          lecture={lecture}
          lectureIndex={lectureIndex}
          id={lecture.id}
          lectureLength={lectures.length}
          moveCard={moveCard}
        />
      );
    },
    [lectures, moveCard]
  );

  if (!lectures) {
    return null;
  }

  return (
    <Card
      elevation={0}
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {lectures.map((lecture, lectureIndex) =>
        renderCard(lecture, lectureIndex)
      )}
    </Card>
  );
}

CourseCard.propTypes = {
  editMode: PropTypes.bool,
};

export default CourseCard;
