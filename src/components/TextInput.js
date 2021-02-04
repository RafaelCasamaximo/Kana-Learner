import React, { useState, useEffect } from 'react'

const TextInput = ({ onTermChange }) => {
    const [term, setTerm] = useState('')

    useEffect(() => {
        console.log(term)
        onTermChange(term)
    }, [term]);


    return (
        <div>

        </div>
    )
}

export default TextInput