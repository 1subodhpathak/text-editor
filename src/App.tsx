import { useState } from 'react'
import Editor from './components/Editor/Editor'
import { BaseKit } from './components/Editor/extensions/BaseKit'

function App() {
  const [content, setContent] = useState('')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [hideToolbar, setHideToolbar] = useState(false)
  const [hideMenubar, setHideMenubar] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const extensions = [
    BaseKit.configure({
      placeholder: {
        showOnlyCurrent: true,
      },
      characterCount: {
        limit: 50000,
      },
    }),
  ]

  return (
    <div className={theme}>
      <header className="p-3 flex gap-3 justify-center w-full bg-accent text-foreground">
        <button 
          className="px-3 py-1 rounded hover:bg-black/10"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
        <button 
          className="px-3 py-1 rounded hover:bg-black/10"
          onClick={() => setHideToolbar(!hideToolbar)}
        >
          {!hideToolbar ? 'Hide Toolbar' : 'Show Toolbar'}
        </button>
        <button 
          className="px-3 py-1 rounded hover:bg-black/10"
          onClick={() => setHideMenubar(!hideMenubar)}
        >
          {!hideMenubar ? 'Hide Menubar' : 'Show Menubar'}
        </button>
        <button 
          className="px-3 py-1 rounded hover:bg-black/10"
          onClick={() => setDisabled(!disabled)}
        >
          {disabled ? 'Editable' : 'Readonly'}
        </button>
      </header>
      
      <div className="my-0 mx-auto max-w-[1024px] p-6">
        <Editor
          value={content}
          onChange={setContent}
          extensions={extensions}
          hideToolbar={hideToolbar}
          hideMenubar={hideMenubar}
          disabled={disabled}
          maxHeight={512}
          output="html"
          dark={theme === 'dark'}
        />
        <div className="mt-3 text-sm text-zinc-700">
          {content}
        </div>
      </div>
    </div>
  )
}

export default App