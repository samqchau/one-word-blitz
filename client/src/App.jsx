import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './styles/app.css';
import Sidebar from './components/Sidebar.jsx';
import Homepage from './screens/Homepage.jsx';
import { parsePassage } from './utils/helperFunctions.js';

const App = () => {
  const [passage, setPassage] = useState(
    parsePassage(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    )
  );
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('Lorem Ipsum');

  const changePassageTo = (newPassage) => {
    setPassage(newPassage);
  };
  const changeTitleTo = (title) => {
    setTitle(title);
  };
  const incrementIndex = () => {
    setIndex((idx) => {
      return idx >= passage.length - 1 ? idx : idx + 1;
    });
  };

  const decrementIndex = () => {
    setIndex((idx) => {
      return idx === 0 ? 0 : idx - 1;
    });
  };
  const resetIndex = () => {
    setIndex(0);
  };

  return (
    <Container className='app d-flex'>
      <Container className='app-main'>
        <Homepage
          passage={passage}
          changePassageTo={changePassageTo}
          index={index}
          incrementIndex={incrementIndex}
          decrementIndex={decrementIndex}
          resetIndex={resetIndex}
          title={title}
        />
      </Container>
      <Sidebar
        changePassageTo={changePassageTo}
        changeTitleTo={changeTitleTo}
        resetIndex={resetIndex}
      />
    </Container>
  );
};

export default App;
