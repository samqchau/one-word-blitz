import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputGroup, Container } from 'react-bootstrap';
import '../styles/wordControls.css';

const WordControls = ({ incrementIndex, decrementIndex, resetIndex }) => {
  let [wpm, setWpm] = useState(200);
  let [playing, setPlaying] = useState(false);

  let togglePlaying = () => {
    setPlaying(!playing);
  };

  //Params (Desired WPM)
  //Returns (miliseconds Per Word)
  let wordEveryMiliseconds = (wpm) => {
    return 60000 / wpm;
  };

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        incrementIndex();
      }, wordEveryMiliseconds(wpm));
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playing, wpm, incrementIndex]);

  return (
    <div className='wordControls'>
      <h2>Word Controls</h2>
      <Container>
        <Button
          variant='dark'
          onClick={() => {
            decrementIndex();
            setPlaying(false);
          }}
        >
          {'<'}
        </Button>
        <Button
          variant='dark'
          onClick={() => {
            resetIndex();
            setPlaying(false);
          }}
        >
          To The beginning
        </Button>
        <Button variant='dark' onClick={togglePlaying}>
          Stop/Play
        </Button>
        <Button
          variant='dark'
          onClick={() => {
            incrementIndex();
            setPlaying(false);
          }}
        >
          {'>'}
        </Button>
        <div className='wordControl-inputGroup-container'>
          <InputGroup className='mb-3 wordControl-inputGroup'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>WPM</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className='wordControls-wpmInput-formControl'
              as='select'
              placeholder='Words Per Minute'
              value={wpm}
              onChange={(e) => {
                setPlaying(false);
                setWpm(e.target.value);
              }}
            >
              {[...Array(18).keys()].map((x) => (
                <option key={x + 1} value={(x + 1) * 25 + 100}>
                  {(x + 1) * 25 + 100}
                </option>
              ))}
            </FormControl>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default WordControls;
