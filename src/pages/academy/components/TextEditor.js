import React from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';
import { useField } from 'formik';
import htmlToDraft from 'html-to-draftjs';
import { PropTypes } from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';

export default function TextEditor(props) {
  const [, meta, helpers] = useField(props);
  const { isShow } = props;
  // console.log(field, meta, helpers);
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const saveContent = () => {
    // console.log('draft content', draftjsToHtml(convertToRaw(editorState.getCurrentContent())))
   let data= draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    // console.log('Converting Editor Data', data);
    data = data.replaceAll(/(^")|("$)/g, '').trim('"');
    // console.log('Saving Editor Data', data);
    helpers.setValue(data);
  };

  const handleChange = (value) => {
    setEditorState(value);
    saveContent();
  };

  React.useEffect(() => {
    props.item?.content
      ? setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              htmlToDraft(
                props.item.content
                  ?.replaceAll(/(^")|("$)/g, '')
                  .trim('"')
              ) || ''.contentBlocks
            )
          )
        )
      : setEditorState(EditorState.createEmpty());
  }, [props.item?.content]);
  return (
    <>
      {isShow ? (
        <>
          <Editor
            // placeholder="Compose an epic.."
            editorState={editorState}
            onEditorStateChange={handleChange}
            toolbar={{
              options: ['fontFamily', 'blockType', 'list', 'inline'],
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
              lineBreak: {
                inDropdown: true,
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
  update: PropTypes.func,
  isShow: PropTypes.bool,
};
