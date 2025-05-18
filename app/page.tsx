import Link from "next/link"
import Image from "next/image"
import { Visitor } from "@/components/visitor-counter"
import { Marquee } from "@/components/marquee"
import { GuestBook } from "@/components/guest-book"

export default function Home() {
  return (
    <div className="min-h-screen bg-teal-900 text-yellow-200 font-['Comic_Sans_MS',_cursive] p-4">
      <div className="max-w-4xl mx-auto border-4 border-yellow-400 bg-purple-900 p-6 shadow-lg">
        <header className="text-center mb-8">
          <div className="bg-yellow-300 text-purple-900 p-4 border-2 border-white shadow-md">
            <h1 className="text-4xl md:text-6xl font-bold animate-pulse">Stovonson&apos;s Happy Place</h1>
            <Marquee text="Welcome to my awesome website! No CSS frameworks were harmed in the making of this site!" />
          </div>
        </header>

        <main className="mb-8">
          <div className="bg-black text-green-400 p-4 border-2 border-green-500 font-mono mb-6">
            <p className="typing-effect">
              Hello and welcome to my personal webpage!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-800 text-white p-4 border-2 border-yellow-300">
              <h2 className="text-xl font-bold mb-2 text-yellow-300">About Me</h2>
              <p>Hi! I'm Stovonson and this is my happy place on the information superhighway!</p>
              <div className="mt-4 text-center">
                <Image src="/stovonson.png" alt="Stovonson" width={100} height={100} className="mx-auto border-2 border-white"/>
              </div>
            </div>

            <div className="bg-blue-800 text-white p-4 border-2 border-yellow-300">
              <h2 className="text-xl font-bold mb-2 text-yellow-300">My Hobbies</h2>
              <ul className="list-disc pl-5">
                <li>Making awesome websites</li>
                <li>Collecting animated GIFs</li>
                <li>Playing MIDI files</li>
                <li>Optimizing for 56k modems</li>
              </ul>
            </div>

            <div className="bg-green-800 text-white p-4 border-2 border-yellow-300">
              <h2 className="text-xl font-bold mb-2 text-yellow-300">Updates</h2>
              <p className="mb-2">05/18/2025: Added new blinking text!</p>
              <p className="mb-2">05/17/2025: Fixed broken GIFs</p>
              <p className="mb-2">05/16/2025: Created this awesome site!</p>
              <div className="mt-4 text-center">
                <span className="animate-pulse inline-block bg-red-500 text-white px-2 py-1">NEW!</span>
              </div>
            </div>
          </div>
        </main>

        <div className="mt-8 bg-red-600 text-white p-4 border-2 border-yellow-300 text-center animate-pulse">
          <p className="font-bold text-xl">This is an example of what you can host at lives-in-the.uk</p>
        </div>

        <footer className="text-center bg-gray-800 p-4 border-t-2 border-yellow-400">
          <p className="mt-4 text-xs">
            © 2025 Stovonson's Happy Place. Best viewed with Netscape Navigator. This page is 100% Y2K compliant!
          </p>
        </footer>
      </div>
    </div>
  )
}
