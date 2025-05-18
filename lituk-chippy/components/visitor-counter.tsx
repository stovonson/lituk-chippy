"use client"

import { useState, useEffect } from "react"

export function Visitor({ count = 1 }: { count?: number }) {
  const [visitors, setVisitors] = useState(count)

  useEffect(() => {
    // Simulate increasing visitor count
    const timer = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 3))
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="inline-block bg-black text-green-400 px-4 py-2 border-2 border-green-500 font-mono">
      <p className="text-sm">You are visitor #</p>
      <div className="flex justify-center">
        {visitors
          .toString()
          .split("")
          .map((digit, i) => (
            <div key={i} className="bg-green-900 text-green-400 px-2 py-1 mx-0.5 border border-green-500">
              {digit}
            </div>
          ))}
      </div>
    </div>
  )
}
