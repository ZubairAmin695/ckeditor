import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';
import ReactHtmlParser from 'react-html-parser';

function App() {
  const [addedData, showData] = useState(false);
  const [addData, setVal] = useState('');

  const handleEditorChange = (content, editor) => {
    setVal(content);
  };

  const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@600&display=swap');
  body {
    font-family: 'Noto Nastaliq Urdu', sans-serif;
  }
`;

  return (
    <div className="App">
      <h2>
        <u>TinyMCE Editor with React.js</u>
      </h2>
<h3>
  فیصلہ
</h3>
      <div>
        <div>
          <button
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={() => showData(!addedData)}
          >
            {addedData ? 'Hide Data' : 'Show Data'}
          </button>
        </div>

        <Editor
           value={addData}
          apiKey='ph9s99wtj40ppljr2eksxjom0d0r01qs5lb8hou08akbyu45'
          init={{
            height: 500,
            menubar: true,
            content_style: fontStyles,
            directionality: 'ltr',
            
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help',
          }}
          onEditorChange={handleEditorChange}
        />

        <div>{addedData ? ReactHtmlParser(addData) : ''}</div>
      </div>
    </div>
  );
}

export default App;
