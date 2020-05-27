import React, { useState, useEffect } from 'react'



const Game = () => {

const rows = Array(5)
const columns = Array(120)
console.log(rows)
    return (
        <div className='outerCountainer'>
           {rows.map((el, id)=> {
               return <p>ciao</p>
           })}
        </div>
    )
}


export default Game