import React from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';
import { useField } from 'formik';
import htmlToDraft from 'html-to-draftjs';
import { PropTypes } from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';

export default function TextEditor(props) {
  const [field, meta, helpers] = useField(props);

  // console.log(field, meta, helpers);
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleChange = (value) => {
    // console.log('change value', value);
    setEditorState(value);
  };

  const handleBlur = () => {
    let data = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    // console.log('Saving Editor Data', JSON.stringify(data));
    helpers.setValue(`${data}`);
  };
  const editorRef = React.useRef(null);

  React.useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          htmlToDraft(
            field.value?.replaceAll(/(^")|("$)/g, '').trim('"')
          ) || ''.contentBlocks
        )
      )
    );
  }, [field.value]);

  return (
    <>
      <Editor
        ref={editorRef}
        // placeholder="Compose an epic.."
        editorState={editorState}
        onEditorStateChange={handleChange}
        onBlur={handleBlur}
        stripPastedStyles={true}
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
