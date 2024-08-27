//Assignment-4 Create a Password Generator using React Hooks.

import { useState, useCallback, useEffect, useRef } from 'react'

//Step-1: App Component will be rendered.
function App() {

  
  /* Step-2: Multiple required State Objects will created- 1)Length  2)Number Allowed  3)Character
    Allowed  4)Password. */
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //Step-11: UseRef Object will be created.
  const passwordRef = useRef(null)

  
  /* Step-5: Password Generator Function will be created for the First Time in Memoisation Cache.
     Reference and Closure will be stored there. */
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    
    /* Step-6: Password will be created and setPassword Function will change "" to Newly Generated
       Password. As the password changed the re-render will happen. */

    /* Step-10: Again a new password with new length will be generated and setPassword will the
       current password and re-render will happen. */
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  //Step-4: useEffect will be used to call the passwordGenerator Function for the First Time.

  /* Step-9: After updating the UI with the same password again LOC comes to useEffect, length has
    changed, useEffect will be invoked, passwordGenerator will be invoked. */
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  /* Step-3: Rendering the App Component with Password "", Range Type 8, Type CheckBox for Number
     Allowed and Character Allowed Unchecked. */

  /* Step-7: Re-Rendring of UI will take place after password change and new password will be 
     displayed. */

  /* Step-10: The New Password with new length will reflected in the UI. */
  return (
    <div className="h-screen w-screen mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-1000 text-orange-500">
      <h1 className='text-white text-center my-10'>Password Generator - React</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
      </div>
      <br />

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          {/* Step-8: If the length changes, setLength will change the value and re-render will happen. */}
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
</div>
  )
}

export default App