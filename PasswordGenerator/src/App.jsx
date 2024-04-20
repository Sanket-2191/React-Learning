import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(6);
  let [useNumber, setNumbers] = useState(false);
  let [useChar, setCharacters] = useState(false);
  let [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEabcdeFGHIJKfghijkLMONOPQRlmnopqrSTUVWXYZstuvwxyz";

    if (useNumber) str += "012345678901234567890123456789";
    if (useChar) str += "!@#$%^!@#&*-_+={!@#!@#";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  },
    [length, useNumber, useChar, password])

  useEffect(() => {
    passwordGenerator();
  }, [length, useChar, useNumber])

  const copyToClipBoard = (content => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(content);
  })

  return (
    <>
      <h1>Password generator</h1>

      <div className="w-full max-w-md 
        mx-auto shadow-md px-4 py-2 my-8
       text-orange-300 bg-gray-400">

        <div className="flex shadow rounded-lg overflow-hidden my-3">
          <input readOnly
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
          />
          <button onClick={() => copyToClipBoard(password)} className='rounded-none'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2 my-4">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={8}
              max={18}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer outline-none w-full py-1 px-3' />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={useNumber}
              onChange={() => setNumbers((prev) => !prev)}
              className='cursor-pointer outline-none w-full py-1 px-3' />
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={useChar}
              onChange={() => setCharacters((prev) => !prev)}
              className='cursor-pointer outline-none w-full py-1 px-3' />
            <label >Characters</label>
          </div>
        </div>


      </div>

    </>
  )
}

export default App
