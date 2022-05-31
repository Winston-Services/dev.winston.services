import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
  Visibility,
} from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';
import { useField } from 'formik';
import htmlToDraft from 'html-to-draftjs';
import { PropTypes } from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';

import { uuid } from '../../../components/common/CommonFunction';

export default function TextEditor(props) {
  const [field, meta, helpers] = useField(props);
  const [editorState, setEditorState] = React.useState(
    props.item?.content
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(props.item.content?.replace(/(^")|("$)/g, '')) ||
              // htmlToDraft(props.item.content?.trim('"')) ||
              ''.contentBlocks
          )
        )
      : EditorState.createEmpty()
  );

  const handleChange = (value) => {
    setEditorState(value);
    const data = JSON.stringify(
      draftjsToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    helpers.setValue(data);
  };

  const [isShow, setIsShow] = React.useState(true);

  return (
    <>
      <Grid container justifyContent={'end'} my={2}>
        <Tooltip placement="top" arrow={true} title={'Download content'}>
          <IconButton
            onClick={() => {
              console.log('editor value', field.value);
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
        <Tooltip placement="top" arrow={true} title={'Copy content'}>
          <IconButton
            onClick={() => {
              props.insert(props.editorIndex, {
                ...props.item,
                id: uuid(),
              });
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
              props.remove(props.editorIndex);
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
          <Editor
            // placeholder="Compose an epic.."
            editorState={editorState}
            onEditorStateChange={handleChange}
            toolbar={{
              options: [
                'fontFamily',
                'blockType',
                'list',
                'inline',
                'image',
                'colorPicker',
              ],
              link: { inDropdown: true },
              inline: {
                options: [
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  'superscript',
                  'subscript',
                ],
                // monospace: { icon: undefined, className: undefined },
              },
              blockType: {
                inDropdown: true,
                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
            }}
          />
        </>
      ) : null}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

TextEditor.propTypes = {
  editorIndex: PropTypes.number,
  remove: PropTypes.func,
  insert: PropTypes.func,
  item: PropTypes.object,
  editorState: PropTypes.any,
};
