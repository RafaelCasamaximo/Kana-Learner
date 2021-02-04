import React from 'react'
import './Score.css'

const Score = ({ score, maxScore, inputAnswer }) => {
    return (
        <div className={`score ${inputAnswer}`}>
            <p>{score}/{maxScore}</p>
        </div>
    )
}

export default Score