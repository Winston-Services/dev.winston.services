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
import { useDispatch } from 'react-redux';

import { uuid } from '../../../components/common/CommonFunction';
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from '../../../store/academy';
import LessonCard from './LessonCard';

export default function CategoryCard({
  category,
  categoryIndex,
  categoryLength,
  moveCard,
  id,
}) {
  const dispatch = useDispatch();
  const [editCategory, setEditCategory] = React.useState({
    categoryIndex: -1,
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
      const dragIndex = item.categoryIndex;
      const hoverIndex = categoryIndex;

      console.log(dragIndex, hoverIndex);
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
      item.categoryIndex = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: () => {
      console.log(id, categoryIndex);
      return { id, categoryIndex };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? '0' : '1';
  preview(drop(ref));

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
            {editCategory.categoryIndex === categoryIndex ? (
              <>
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  sx={{ width: 'auto' }}
                  variant="standard"
                  value={editCategory.name}
                  onChange={(e) =>
                    setEditCategory({
                      ...editCategory,
                      name: e.target.value,
                    })
                  }
                />
              </>
            ) : (
              <>
                <Typography variant="subtitle1">{category.name}</Typography>
              </>
            )}
            {editCategory.categoryIndex === categoryIndex ? (
              <Tooltip
                placement="top"
                arrow={true}
                title={'Update category name'}
              >
                <IconButton
                  onClick={() => {
                    setEditCategory({
                      ...editCategory,
                      categoryIndex: -1,
                    });
                    dispatch(
                      updateCategory({
                        categoryIndex,
                        name: editCategory.name,
                      })
                    );
                  }}
                >
                  <Done sx={{ color: '#C4C4C4' }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                placement="top"
                arrow={true}
                title={'Edit Category Name'}
              >
                <IconButton
                  onClick={() => {
                    setEditCategory({
                      name: category.name,
                      categoryIndex,
                    });
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
            {categoryLength > 1 ? (
              <Tooltip placement="top" arrow={true} title={'Delete Category'}>
                <IconButton
                  onClick={() => dispatch(deleteCategory(categoryIndex))}
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
            <Tooltip placement="top" arrow={true} title={'Copy Category'}>
              <IconButton
                onClick={() =>
                  dispatch(
                    addCategory({
                      categoryIndex,
                      categoryData: {
                        ...category,
                        id: uuid(),
                        lesson: category.lesson.map((lesson) => {
                          return { ...lesson, id: uuid() };
                        }),
                      },
                    })
                  )
                }
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
        {category?.lesson?.map((lesson, lessonIndex) => (
          <LessonCard
            key={lessonIndex}
            lesson={lesson}
            lessonIndex={lessonIndex}
            categoryIndex={categoryIndex}
            lessonLength={category.lesson.length}
          />
        ))}
      </Grid>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object,
  categoryIndex: PropTypes.number,
  categoryLength: PropTypes.number,
  moveCard: PropTypes.func,
  id: PropTypes.string,
};
