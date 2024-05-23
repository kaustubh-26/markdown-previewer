import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { setMarkdown } from './features/preview/previewSlice'
import { marked } from 'marked';

// Create a new renderer instance
const renderer = new marked.Renderer();

// Set options for marked
marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: true,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

function App() {
  const markdown = useSelector(state => state.markdown);
  const dispatch = useDispatch();

  

  const changeText = (e) => {
    dispatch(setMarkdown(e.target.value))
  }

  const htmlContent = marked(markdown);

  return (
    <>
      <div>
        <h1 className='text-white text-4xl pt-4'>Markdown Previewer</h1>
        <div className='content-container'>
          <div id='editor-container'>
          <div id="editor-header">
              <span>Editor</span>
            </div>
            <div id="editor-wrapper">
          <textarea name='editor' id='editor' cols={60} rows={10} value={markdown} onChange={changeText} className='border border-slate-700 rounded'></textarea>
            </div>
          </div>
          <div id='preview-container'>
          <div className="content-header">
              <span>Preview</span>
            </div>
            <div id="preview" className='markdown-body' dangerouslySetInnerHTML={{ __html: htmlContent }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
