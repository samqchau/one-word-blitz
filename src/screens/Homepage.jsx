import React from 'react';
import WordDisplay from '../components/WordDisplay';
import WordControls from '../components/WordControls';
import PassageDisplay from '../components/PassageDisplay';

import {Container} from 'react-bootstrap';

const Homepage = ({passage, changePassageTo, index, incrementIndex, decrementIndex, resetIndex, title}) => {
    return (
        <Container className='homepage'>
            <WordDisplay passage={passage} index={index}/>
            <WordControls 
            incrementIndex={incrementIndex}
            decrementIndex={decrementIndex}
            resetIndex={resetIndex}
            />
            <PassageDisplay passage={passage} index={index} changePassageTo={changePassageTo} title={title}/>
        </Container>
    )
}

export default Homepage
