import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?`~'

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }

    setPassword(pass)
    setCopied(false)  // reset copied effect
  }, [length, numberAllowed, charAllowed])

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 9999)
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    }
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-orange-500 px-4">
      <div className="w-full max-w-md shadow-2xl rounded-xl px-6 py-8 bg-gray-700 animate-fade-in-down">
        <h1 className="text-4xl font-bold text-center mb-6 text-white animate-pulse">
          🔐 Password Generator
        </h1>

        <div className={`flex shadow-inner rounded-lg overflow-hidden mb-6 border transition-all duration-500 ${copied ? 'border-green-400 scale-105' : 'border-orange-400'}`}>
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-3 px-4 bg-gray-900 text-green-300 font-mono text-sm tracking-wide transition-all duration-300'
          />
          <button
            onClick={copyToClipboard}
            className='bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 transition-all duration-300 ease-in-out hover:rotate-12'
          >
            📋
          </button>
        </div>

        <div className='flex flex-col gap-4 mb-6'>
          <div className='flex items-center justify-between'>
            <label className='text-lg text-white'>Password Length</label>
            <input
              type="number"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='outline-none w-20 py-1 px-2 bg-gray-900 text-green-400 rounded border border-gray-600 hover:border-orange-500 transition'
            />
          </div>

          <div className='flex items-center gap-3 hover:scale-105 transition'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className='accent-orange-500 scale-125 transition duration-200'
            />
            <label className='text-white'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-3 hover:scale-105 transition'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className='accent-orange-500 scale-125 transition duration-200'
            />
            <label className='text-white'>Include Special Characters</label>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className='w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 ease-in-out hover:scale-105 shadow-lg animate-bounce-once'
        >
          🔁 Generate New Password
        </button>
      </div>
    </div>
  )
}

export default App
