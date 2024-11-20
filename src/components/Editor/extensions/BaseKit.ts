// src/components/Editor/extensions/BaseKit.ts
import { Extension } from '@tiptap/core'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

export const BaseKit = Extension.create({
  name: 'baseKit',

  addExtensions() {
    const extensions = [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      CharacterCount.configure({
        limit: 50000,
      }),
    ]

    return extensions
  },
})



// // src/components/Editor/extensions/BaseKit.ts
// import { Extension } from '@tiptap/core'
// import StarterKit from '@tiptap/starter-kit'
// import Underline from '@tiptap/extension-underline'
// import Link from '@tiptap/extension-link'
// import Image from '@tiptap/extension-image'
// import TextAlign from '@tiptap/extension-text-align'
// import Table from '@tiptap/extension-table'
// import TableRow from '@tiptap/extension-table-row'
// import TableCell from '@tiptap/extension-table-cell'
// import TableHeader from '@tiptap/extension-table-header'
// import Placeholder from '@tiptap/extension-placeholder'
// import CharacterCount from '@tiptap/extension-character-count'

// export const BaseKit = Extension.create({
//   name: 'baseKit',

//   addExtensions() {
//     return [
//       StarterKit,
//       Underline,
//       Link.configure({
//         openOnClick: false,
//       }),
//       Image.configure({
//         allowBase64: true,
//         inline: true,
//       }),
//       TextAlign.configure({
//         types: ['heading', 'paragraph'],
//         alignments: ['left', 'center', 'right'],
//       }),
//       Table.configure({
//         resizable: true,
//       }),
//       TableRow,
//       TableCell,
//       TableHeader,
//       Placeholder.configure({
//         placeholder: 'Write something...',
//       }),
//       CharacterCount.configure({
//         limit: 50000,
//       }),
//     ]
//   },
// })