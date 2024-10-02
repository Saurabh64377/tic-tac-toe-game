import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import Players from './Components/Players'

const App = () => {
  const [reset, setReset] = useState(false)
  const [over, setOver] = useState(true)
  const [winner, setWinner] = useState('')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [showPopup, setShowPopup] = useState(false) 
  const [popupMessage, setPopupMessage] = useState('') 

  const Reset = () => {
    setReset(true)
    setWinner('')
    setShowPopup(false) 
  }

  const Over = () => {
    setOver(true)
    setReset(true)
    setWinner('')
    setShowPopup(false) 
  }

  // Function to show popup
  const handleWin = (message) => {
    setPopupMessage(message)
    //showpopup
    setShowPopup(true)
  }

  return (
    <div className='app'>
      <div className='fw-bold display-1'>TIC-TAC-TOE</div>

      <div className='text-center'>
        <div className='fw-bold text-success fs-3'>
          WINNER PLAYER <span className='text-primary'>{winner}</span>
        </div>
        {
          over ?
            <button onClick={Reset} className='btn btn-outline-danger btn-sm fw-bold'>Reset Game</button>
            :
            <button onClick={Over} className='btn btn-outline-warning btn-sm fw-bold'>Game Over</button>
        }
      </div>

      <Board 
        count1={count1} 
        count2={count2} 
        reset={reset} 
        over={over} 
        setReset={setReset} 
        setWinner={setWinner} 
        setOver={setOver} 
        setCount1={setCount1} 
        setCount2={setCount2} 
        onWin={handleWin} 
      />
      <Players count1={count1} count2={count2} />

      {/* Popup modal for congratulating the winner */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2 className='fs-6 fw-bold'>{popupMessage}</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
