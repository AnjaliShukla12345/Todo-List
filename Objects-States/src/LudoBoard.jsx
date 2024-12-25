import { useState } from "react"

export default function LudoBoard() {
let [moves , setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0}); 
//Object

let [arr , setArr] = useState(["no moves"]);               //Array


let updateBlue = () =>{
    // moves.blue += 1;
    // console.log(`moves.blue = ${moves.blue}`);
    setMoves((prevMoves) =>{
    return {...prevMoves, blue: prevMoves.blue +1}
    });   
}

let updateYellow = () =>{
    // setMoves((prevMoves) =>{
    //     return {...prevMoves, yellow: prevMoves.yellow + 1}
    // }); 
    
    
setArr((prevArr) =>       //Array and state
{return [...prevArr , "yellow moves"]});
console.log(arr);
}



let updateGreen = () =>{
    setMoves((prevMoves) =>{
        return {...prevMoves, green: prevMoves.green + 1}
    });              
}

let updateRed = () =>{
    setMoves((prevMoves) =>{
        return {...prevMoves, red: prevMoves.red + 1}
    });              
}



  return (
    <div>
    <h1>Game Begins!</h1>

    <p>{arr}</p>


    <div className="board">
    <p>Blues Moves = {moves.blue}</p>
    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

    <p>Yellow Moves = {moves.yellow}</p>
    <button style={{backgroundColor:"yellow"}}  onClick={updateYellow}>+1</button>

    <p>Green Moves = {moves.green}</p>
    <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

    <p>Red Moves = {moves.red}</p>
    <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
    </div>
    </div>
  )
}
