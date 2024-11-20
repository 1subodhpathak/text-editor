import { Italic as TiptapItalic } from '@tiptap/extension-italic'
import type { ItalicOptions as TiptapItalicOptions } from '@tiptap/extension-italic'

export interface ItalicOptions extends TiptapItalicOptions {
  button?: {
    tooltip?: string;
    icon?: string;
    shortcutKeys?: string[];
  };
}

export const Italic = TiptapItalic.configure({
  HTMLAttributes: {
    class: 'italic',
  },
}).extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: {
        tooltip: 'Italic',
        icon: 'I',
        shortcutKeys: ['Mod', 'I'],
      },
    }
  },
})