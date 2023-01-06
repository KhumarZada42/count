import React, { createContext, useState } from 'react'

export  const  CounterContext = createContext();

function CounterContextProvider({children}) {
    
    const [count, setcount] = useState(0)
    const data = [count, setcount]

  return (
    <CounterContext.Provider value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider