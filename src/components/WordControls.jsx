import React from 'react'
import {Button} from 'react-bootstrap';
import '../styles/wordControls.css';

const WordControls = ({incrementIndex, decrementIndex, resetIndex}) => {
    return (
        <div className='wordControls'>
            <h2>Word Controls</h2>
            <Button variant='info' onClick={decrementIndex}>{'<'}</Button>
            <Button onClick={resetIndex}>To The beginning</Button>
            <Button>Stop/Play</Button>
            <Button variant='info' onClick={incrementIndex}>{'>'}</Button>
        </div>
    )
}

export default WordControls
