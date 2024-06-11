import React from "react";
import "./Lottery.css";
import { useState } from "react";
import { genTicket, sum } from "./helper";
const Lottery = () => {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinning = sum(ticket) === 15;
  const buyTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>By New Ticket</button>
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
};

export default Lottery;
