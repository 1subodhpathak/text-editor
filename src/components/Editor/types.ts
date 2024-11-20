// src/components/Editor/types.ts
import { Editor } from '@tiptap/react'

export interface EditorProps {
  value: string
  onChange: (value: string) => void
  extensions?: any[]
  hideToolbar?: boolean
  hideMenubar?: boolean
  disabled?: boolean
  maxHeight?: number
  output?: 'html' | 'markdown'
  dark?: boolean
}

export interface ToolbarProps {
  editor: Editor | null
  dark?: boolean
}