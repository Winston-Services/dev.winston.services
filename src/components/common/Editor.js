import React, { Component } from 'react';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class WysiwygEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName=""
        editorClassName=""
        onEditorStateChange={(editorState) => {
          this.setState({
            editorState,
          });
        }}
      />
    );
  }
}

export default WysiwygEditor;
