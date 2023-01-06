import React from 'react'
import Clicker from '../../components/Cliciker'
import CounterShow from '../../components/CounterShow'

function Home() {
  return (
    <div>
        <CounterShow></CounterShow>
        <Clicker/>
    </div>
  )
}

export default Home