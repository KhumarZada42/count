import React, { useContext } from 'react'
import { CounterContext } from '../../context/MainContext'

function CounterShow() {
    const [count] = useContext(CounterContext)
  return (
    <h1>CounterShow => {count}</h1>
  )
}

export default CounterShow