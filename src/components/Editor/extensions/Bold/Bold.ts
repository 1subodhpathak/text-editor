import { Bold as TiptapBold } from '@tiptap/extension-bold'
import type { BoldOptions as TiptapBoldOptions } from '@tiptap/extension-bold'

export interface BoldOptions extends TiptapBoldOptions {
  button?: {
    tooltip?: string;
    icon?: string;
    shortcutKeys?: string[];
  };
}

export const Bold = TiptapBold.configure({
  HTMLAttributes: {
    class: 'font-bold',
  },
}).extend<BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: {
        tooltip: 'Bold',
        icon: 'B',
        shortcutKeys: ['Mod', 'B'],
      },
    }
  },
})
