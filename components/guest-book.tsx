"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function GuestBook() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [entries, setEntries] = useState([
    { name: "WebSurfer95", message: "Cool site, dude! Totally radical!", date: "05/15/2025" },
    { name: "InternetExplorer", message: "First time here, love the design!", date: "05/14/2025" },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && message) {
      const today = new Date()
      const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
      setEntries([{ name, message, date }, ...entries])
      setName("")
      setMessage("")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 border-2 border-blue-500">
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">Your Name:</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-blue-500 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">Your Message:</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-2 border-blue-500 p-2"
            rows={4}
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border-2 border-black"
        >
          Sign Guestbook!
        </Button>
      </form>

      <div className="bg-white text-black p-4 border-2 border-blue-500">
        <h3 className="text-lg font-bold mb-4 text-blue-800">Recent Visitors:</h3>
        {entries.map((entry, index) => (
          <div key={index} className="mb-4 pb-4 border-b border-dashed border-blue-300">
            <div className="flex justify-between">
              <span className="font-bold text-red-600">{entry.name}</span>
              <span className="text-sm text-gray-600">{entry.date}</span>
            </div>
            <p className="mt-2">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
