"use client"

import { useEffect } from 'react'

interface InstagramEmbedProps {
  url: string
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    // Process Instagram embeds when component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  const embedHtml = `<blockquote 
    class="instagram-media" 
    data-instgrm-permalink="${url}?utm_source=ig_embed&amp;utm_campaign=loading" 
    data-instgrm-version="14"
    style="
      background:#FFF; 
      border:0; 
      border-radius:3px; 
      box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
      margin: 1px; 
      max-width:540px; 
      min-width:326px; 
      padding:0; 
      width:99.375%;
    "
  ></blockquote>`

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
}