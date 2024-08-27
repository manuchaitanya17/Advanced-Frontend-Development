import { useState, useEffect } from 'react'

import { ThemeContextProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

/* Step-3: We created a App Component. */
function App() {

  /* Step-4: We created a State Object to set the theme of the background. These state data will be passed
     to the ThemeBtn Component. We also created some functions that will set the theme. */
  const [themeMode, setThemeMode] = useState("light");
  
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  

  /* Step-5: We use the created ThemeContext Wrapper to wrap the required components between which we want 
     to share the data through out Global Context. The value attribute stores the properties that has to
     be shared. */
  return (
  <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
    <h1>Let me explain the Context API and useContext() Hook, Sir!</h1>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>
  
            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
    </div>
  </ThemeContextProvider>
  )
}

export default App
