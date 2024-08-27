//Assignment-2 Create a BackGround Color Changer using useState Hook.

import { useState } from 'react'

function bgChanger() {
  const [color, setColor] = useState("olive");

  return (
      <div className='h-screen w-screen duration-200' style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-{color} рх-3 ру-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} onClick={()=> setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}} onClick={()=> setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}} onClick={()=> setColor('green')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}} onClick={()=> setColor('black')}>Black</button>
          </div>
        </div>
      </div>
  )
}

export default bgChanger;
