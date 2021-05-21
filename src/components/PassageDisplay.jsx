import React from 'react'

const highlightColor = 'rgb(255, 249, 179)';

const PassageDisplay = ({passage, index, title}) => {
    return (
        <div className='passageDisplay'>
            <h2>{title}</h2>
            {passage.map((word, i) => 
            <div style={{display: 'inline-flex', background: i===index ? highlightColor : 'none'}} key={i}>                
                <span style={{width: '3px', background: (i-index === 1 || i-index === 0) ? highlightColor : 'none'}}/>
                <div key={i} style={{}}>{word}</div>
            </div>
            )}
        </div>
    )
}

export default PassageDisplay
