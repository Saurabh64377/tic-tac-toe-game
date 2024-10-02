import React, { useEffect, useState } from 'react'

const Board = ({ reset, setReset, setWinner, setOver, over, setCount1, setCount2, count1, count2, onWin }) => { // Added onWin to props

    const [data, setdata] = useState(Array(9).fill(''))
    const [current, setcurrent] = useState('X')

    useEffect(() => {
        if (reset) {
            setdata(Array(9).fill(''))
        }
        
        setReset(false);

    }, [reset, setReset]);

    const draw = (index) => {
        if (over) {
            if (data[index] === '') {
                const board = [...data]; 
                board[index] = current;
                setdata(board);

                if (current === 'X') {
                    setcurrent('O');
                } else {
                    setcurrent('X');
                }

                if (checkWin(board)) {
                    if (current === 'X') {
                        setWinner('Player X is the winner!');
                        setCount1(count1 + 1);
                        onWin('🎉Congratulation Player X 🎉 '); 
                    } else {
                        setWinner(' Player O is the winner!');
                        setCount2(count2 + 1);
                        onWin('🎉Congratulation Player O 🎉'); 
                    }
                    setOver(false);
                }

                if (checkDraw(board)) { 
                    setWinner('Game is a draw 😒');
                    onWin("It's a draw! Try again."); 
                    setOver(false);
                }
            }
        }
    }

    // checkWin function
    const checkWin = (board) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let condition of conditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;  // A winning condition has been met
            }
        }
    
        return false;  
    };

    
    // Check draw function
const checkDraw = (board) => {
    let count = 0;
    board.forEach((element) => {
        if (element !== '') {
            count++;
        }
    });
    if (count >= 9) {
        return true; 
    } else {
        return false; 
    }
}


    return (
        <div className="board fs-1">
            {data.map((box, index) => (
                <div
                    key={index}
                    className={`input input${index + 1}`}
                    onClick={() => draw(index)}
                >
                    {box}
                </div>
            ))}
        </div>
    )
}

export default Board;
