"use client"

import { useState, useEffect } from "react"

export function Marquee({ text }: { text: string }) {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (text.length + 20))
    }, 150)

    return () => clearInterval(interval)
  }, [text.length])

  const displayText = " ".repeat(20) + text + " ".repeat(20)
  const visibleText = displayText.substring(position, position + 40)

  return (
    <div className="overflow-hidden bg-black text-yellow-300 p-2 mt-4 font-bold">
      <p>{visibleText}</p>
    </div>
  )
}
