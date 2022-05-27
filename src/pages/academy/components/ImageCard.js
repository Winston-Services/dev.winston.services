import React from 'react';

import { Cancel } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material/';
import { PropTypes } from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

function ImageCard({ item, itemIndex, removeImageItem, moveCard, id }) {
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
      const dragIndex = item.itemIndex;
      const hoverIndex = itemIndex;
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
      item.itemIndex = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      console.log(id, itemIndex);
      return { id, itemIndex };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? '0' : '1';
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <Grid key={itemIndex} pt={2} pb={1} px={2}>
        <div className="sliderImage">
          <img
            // src={URL.createObjectURL(item)}
            src={item.name}
            alt=""
            height="150px"
            width="150px"
            style={{ borderRadius: '10px' }}
          />
          <div>
            <IconButton
              sx={{ color: 'red' }}
              onClick={() => {
                removeImageItem(item.id);
                console.log(item.id);
              }}
            >
              <Cancel />
            </IconButton>
          </div>
        </div>
      </Grid>
    </div>
  );
}

ImageCard.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
  moveCard: PropTypes.func,
  id: PropTypes.string,
  removeImageItem: PropTypes.func,
};

export default ImageCard;
