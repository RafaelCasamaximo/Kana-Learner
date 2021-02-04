
import React from 'react'
import './HiraganaCard.css'

const HiraganaCard = ({ kana, inputAnswer }) => {
    console.log(kana)
    const answer = () => {
        if (inputAnswer === 'wrong') {
            return 'shakeDiv';
        }
    }
    return (
        <div className={`hiragana-card noselect ${answer()}`}>
            <p>{kana}</p>
        </div>
    )
}

export default HiraganaCard