"use client"

import { useEffect } from "react"

export default function UnicornEmbed() {
  useEffect(() => {
    // Only add the script if it's not already added
    if (!window.UnicornStudio || !window.UnicornStudio.isInitialized) {
      const script = document.createElement("script")
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.22/dist/unicornStudio.umd.js"
      script.async = true
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          // @ts-ignore
          window.UnicornStudio.init()
          // @ts-ignore
          window.UnicornStudio.isInitialized = true
        }
      }
      document.body.appendChild(script)
      document.addEventListener('DOMContentLoaded',e => {
        console.log(document.querySelectorAll('a'))
      })
    }
  }, [])





  return (
    <div
      data-us-project="ZwDi7hOXpPtHoeW3aVwX"
      className="w-full h-full max-w-full mx-auto"
    />
  )
}
