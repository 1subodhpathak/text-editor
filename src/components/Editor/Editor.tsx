// src/components/Editor/Editor.tsx
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { EditorProps } from '../../types';
import Toolbar from './Toolbar/index';
// import { BaseKit } from './extensions/BaseKit';
import { ExtendedKit } from './extensions/ExtendedKit'


const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  extensions = [],
  hideToolbar = false,
  hideMenubar = false,
  disabled = false,
  maxHeight = 512,
  output = 'html',
  dark = false,
}) => {
  const editor = useEditor({
    extensions: [ExtendedKit, ...extensions],
    content: value,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  return (
    <div className={`editor-container ${dark ? 'dark' : ''}`}>
      {!hideToolbar && <Toolbar editor={editor} dark={dark} />}
      <EditorContent 
        editor={editor} 
        className="prose max-w-none"
        style={{ maxHeight }}
      />
      {/* Add output preview if needed */}
      {output === 'html' && value && (
        <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
          {value}
        </div>
      )}
    </div>
  );
};

export default Editor;