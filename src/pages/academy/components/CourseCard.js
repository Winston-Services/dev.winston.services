import React from 'react';

import { Card } from '@mui/material';
import update from 'immutability-helper';
import { useSelector, useDispatch } from 'react-redux';

import { courseSelector, setCategory } from './../../../store/academy';
import CategoryCard from './CategoryCard';

function CourseCard() {
  const dispatch = useDispatch();
  const courseData = useSelector(courseSelector);
  const [categoryCards, setCategoryCards] = React.useState(courseData.category);
  const moveCard = React.useCallback((dragIndex, hoverIndex) => {
    setCategoryCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  React.useEffect(() => {
    dispatch(setCategory(categoryCards));
  }, [categoryCards, dispatch]);

  React.useEffect(() => {
    setCategoryCards(courseData.category);
  }, [courseData.category]);

  const renderCard = React.useCallback(
    (category, categoryIndex) => {
      // console.log(category.id);
      return (
        <CategoryCard
          key={category.id}
          category={category}
          categoryIndex={categoryIndex}
          id={category.id}
          categoryLength={categoryCards.length}
          moveCard={moveCard}
        />
      );
    },
    [categoryCards.length, moveCard]
  );
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
      {categoryCards.map((category, categoryIndex) =>
        renderCard(category, categoryIndex)
      )}
    </Card>
  );
}

export default CourseCard;
