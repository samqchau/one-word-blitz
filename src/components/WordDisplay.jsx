import React, { useState, useEffect } from 'react';
import '../styles/wordDisplay.css';
import { cleanWord } from '../utils/helperFunctions';

const WordDisplay = ({ passage, index }) => {
  let [word, setWord] = useState(cleanWord(passage[index]));
  useEffect(() => {
    setWord(cleanWord(passage[index]));
  }, [index, passage]);
  return (
    <div className='wordDisplay'>
      <h6>Word Display</h6>
      {index} {word}
    </div>
  );
};

export default WordDisplay;
