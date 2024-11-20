// src/components/Editor/Toolbar/index.tsx
import React from 'react';
import { ToolbarProps, ToolbarButtonProps } from '../../../types';

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  active,
  disabled,
  onClick,
  children,
  title,
  className,
}) => {
  return (
    <button
      type="button"
      className={`
        p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
        ${active ? 'bg-gray-200 dark:bg-gray-700' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className || ''}
      `}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({ editor, dark }) => {
  if (!editor) {
    return null;
  }

return (
  <div className={`toolbar flex flex-wrap gap-2 p-2 border-b ${dark ? 'border-gray-700' : 'border-gray-200'}`}>
    {/* Text style section */}
    <div className="flex items-center gap-1">
      <select
        className="px-2 py-1 rounded-md bg-transparent border dark:border-gray-700"
        onChange={e => {
          const level = parseInt(e.target.value);
          level === 0
            ? editor.chain().focus().setParagraph().run()
            : editor.chain().focus().toggleHeading({ level }).run();
        }}
        value={
          editor.isActive('heading', { level: 1 })
            ? '1'
            : editor.isActive('heading', { level: 2 })
            ? '2'
            : editor.isActive('heading', { level: 3 })
            ? '3'
            : '0'
        }
      >
        <option value="0">Paragraph</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
      </select>
    </div>

    {/* Basic formatting */}
    <div className="flex items-center gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive('bold')}
        title="Bold"
      >
        B
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive('italic')}
        title="Italic"
      >
        I
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive('underline')}
        title="Underline"
      >
        U
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          const url = window.prompt('Enter URL');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        active={editor.isActive('link')}
        title="Link"
      >
        🔗
      </ToolbarButton>
    </div>

    {/* Alignment */}
    <div className="flex items-center gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        active={editor.isActive({ textAlign: 'left' })}
        title="Align Left"
      >
        ←
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        active={editor.isActive({ textAlign: 'center' })}
        title="Align Center"
      >
        ↔
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        active={editor.isActive({ textAlign: 'right' })}
        title="Align Right"
      >
        →
      </ToolbarButton>
    </div>

    {/* Lists */}
    <div className="flex items-center gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive('bulletList')}
        title="Bullet List"
      >
        •
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
        title="Numbered List"
      >
        1.
      </ToolbarButton>
    </div>

    {/* Media and special blocks */}
    <div className="flex items-center gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive('codeBlock')}
        title="Code Block"
      >
        &lt;/&gt;
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          const url = window.prompt('Enter image URL');
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        title="Insert Image"
      >
        📷
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().insertTable({
          rows: 3,
          cols: 3,
          withHeaderRow: true
        }).run()}
        title="Insert Table"
      >
        ⊞
      </ToolbarButton>
    </div>
  </div>
);
};


export default Toolbar;