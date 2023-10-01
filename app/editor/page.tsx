"use client"

import { Editor } from "novel"
import { useState } from "react"
import { JSONContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Page() {
  const [docData, setDocData] = useState<string | JSONContent | undefined>({
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "" }],
      },
    ],
  })
  return (
    <main id='editor' className=''>
      <Editor className='mx-auto w-3/5' defaultValue={docData} />
    </main>
  )
}
