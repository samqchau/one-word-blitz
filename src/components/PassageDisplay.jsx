import React from 'react';
import '../styles/passageDisplay.css';

const highlightColor = 'rgb(255, 249, 179)';

const PassageDisplay = ({ passage, index, title }) => {
  return (
    <div className='passageDisplay'>
      <div className='passageDisplay-header'>
        <h2 className='passageDisplay-header-title'>{title}</h2>
        <p className='passageDisplay-header-author'>Written by : Samuel Chau</p>
        <p className='passageDisplay-header-date'>On 5/20/2021</p>
      </div>
      <br />
      {passage.map((word, i) => (
        <div
          style={{
            display: 'inline-flex',
            background: i === index ? highlightColor : 'none',
            paddingRight: '3px',
            paddingLeft: '3px',
          }}
          key={i}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default PassageDisplay;
