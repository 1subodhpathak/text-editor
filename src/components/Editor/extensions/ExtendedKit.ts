import { Extension } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import { Bold } from './Bold/Bold'
import { Italic } from './Italic/Italic'

export const ExtendedKit = Extension.create({
  name: 'extendedKit',

  addExtensions() {
    return [
      StarterKit.configure({
        // Customize StarterKit if needed
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Bold.configure({}),
      Italic.configure({}),
      Underline.configure({
        HTMLAttributes: {
          class: 'underline',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-700 underline',
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
    ]
  },
})