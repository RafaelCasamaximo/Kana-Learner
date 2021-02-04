import React, { useState, useEffect } from 'react'
import HiraganaCard from './components/HiraganaCard'
import Score from './components/Score'
import './App.css'
import { kanas } from './data/kana'

const App = () => {
    const [term, setTerm] = useState('');
    const [kana, setKana] = useState({});
    const [symbol, setSymbol] = useState('');
    const [maxScore, setMaxScore] = useState(0);
    const [score, setScore] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');

    const changeKana = () => {
        const index = Math.floor(Math.random() * 104);
        setKana(kanas[index]);
        const valor = Math.floor(Math.random() * 2)
        setSymbol(valor === 1 ? kanas[index].hiragana : kanas[index].katakana)
    }

    const changeScore = (isRight) => {
        setMaxScore(maxScore + 1);
        if (isRight) {
            setScore(score + 1)
        }
    }

    useEffect(() => {
        changeKana()
    }, []);

    const check = (term) => {
        if (term === kana.roumaji) {
            setTerm('')
            changeKana()
            changeScore(1)
            setInputAnswer('right');
            setTimeout(() => {
                setInputAnswer('');
            }, 500)
        }
        else {
            if (term.length > kana.roumaji.length) {
                setTerm('')
                changeKana()
                changeScore(0)
                setInputAnswer('wrong');
                setTimeout(() => {
                    setInputAnswer('');
                }, 500)
            }
            else {
                setTerm(term)
            }
        }
    }

    return (
        <>
            <div className="app">
                <HiraganaCard inputAnswer={inputAnswer} kana={symbol} />
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className={inputAnswer} type="text" onChange={(e) => check(e.target.value)} value={term} />
                </form>
                <Score inputAnswer={inputAnswer} score={score} maxScore={maxScore} />
                <a className="dev" href="https://github.com/RafaelCasamaximo" target="_blank"><b>Rafael Furlanetto Casamaximo</b></a>
            </div>
        </>
    )
}

export default App