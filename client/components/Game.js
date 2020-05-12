import React, { useState, useEffect } from 'react'



const Game = () => {
const rows = Array(70)
const columns = Array(120)
    return (
        <div className='outerCountainer'>
            {rows.map(() => {
                return <div className='row'>
                {columns.map(() => {
                    return <div className='column'></div>
                })}
                </div>
                })}
        </div>
    )
}


export default Game