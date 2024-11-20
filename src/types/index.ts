// src/types/index.ts
import { Editor } from '@tiptap/react'

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  extensions?: any[];
  hideToolbar?: boolean;
  hideMenubar?: boolean;
  disabled?: boolean;
  maxHeight?: number;
  output?: 'html' | 'markdown';
  dark?: boolean;
}

export interface ToolbarProps {
  editor: Editor | null;
  dark?: boolean;
}

export interface ToolbarButtonProps {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
  className?: string;
}

export interface MenubarProps {
  editor: Editor | null;
  dark?: boolean;
}