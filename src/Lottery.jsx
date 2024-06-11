import React from 'react'
import "./Lottery.css"
import { useState } from 'react'
import genTicket from './helper'
const Lottery = () => {
    const [ticket, setTicket] = useState(genTicket(3))
    const isWinning = sum(ticket)
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
    </div>
  )
}

export default Lottery
