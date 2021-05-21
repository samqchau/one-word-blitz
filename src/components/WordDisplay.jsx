import React from 'react'
import '../styles/wordDisplay.css'

const WordDisplay = ({passage, index}) => {
    return (
        <div className='wordDisplay'>
            <h6>Word Display</h6>
            {passage[index]}
            {index}
        </div>
    )
}

export default WordDisplay
