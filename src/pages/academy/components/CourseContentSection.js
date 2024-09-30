import React from 'react';

import { Typography } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import TextEditor from '../components/TextEditor';

const CourseContentSection = ({ name, label, index, children, ...props }) => {
  const { id, type, config, remove, insert, update, onChange } = props;
  const [field, meta, helpers] = useField(name);
  // console.log('field', field);
  switch (type) {
    case 'wysiwyg':
      return (
        <TextEditor
          name={name}
          editorIndex={index}
          remove={remove}
          insert={insert}
          item={{ config, content: field.value }}
          update={update}
          onChange={(e, value) => {
            onChange(e, { id, value });
          }}
        />
      );
    case 'text':
      return <div>Text</div>;
    case 'image':
      return <div>Image</div>;
    case 'slider':
      return <div>Slider</div>;
    default:
      return (
        <div
          onClick={(e) => {
            onChange(e, { id, value: 'This is a test' });
          }}
        >
          <label htmlFor={name}>{label}</label>
          <Typography>{id}</Typography>
          <Typography>{type}</Typography>
          <Typography>{config}</Typography>
          
          {/*<input id={name} {...field} {...props} />*/}
          {children}
          {meta.touched && meta.error && <div>{meta.error}</div>}
          {helpers.value && <div>{helpers.value}</div>}
        </div>
      );
  }
};

CourseContentSection.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  config: PropTypes.any,
  remove: PropTypes.func.isRequired,
  insert: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default CourseContentSection;
