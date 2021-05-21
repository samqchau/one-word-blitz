import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/sidebar.css';
import PassageListing from '../components/PassageListing.jsx';
import { buildingTheButternut } from '../data/passages/100wordStories.js';
import { bewareTheBeast } from '../data/passages/200wordStories.js';

const Sidebar = ({ changePassageTo, changeTitleTo, resetIndex }) => {
  return (
    <div className='sidebar'>
      <ListGroup className='sidebar-passageList'>
        What's it like to read x00 words per minute?
        <PassageListing
          changePassageTo={changePassageTo}
          changeTitleTo={changeTitleTo}
          title={buildingTheButternut.title}
          content={buildingTheButternut.content}
          resetIndex={resetIndex}
        />
        <PassageListing
          changePassageTo={changePassageTo}
          changeTitleTo={changeTitleTo}
          title={bewareTheBeast.title}
          content={bewareTheBeast.content}
          resetIndex={resetIndex}
        />
        <PassageListing
          changePassageTo={changePassageTo}
          changeTitleTo={changeTitleTo}
          title='300 wpm'
          content='This is a one hundred word short story'
          resetIndex={resetIndex}
        />
        <PassageListing
          changePassageTo={changePassageTo}
          changeTitleTo={changeTitleTo}
          title='400 wpm'
          content='This is a one hundred word short story'
          resetIndex={resetIndex}
        />
        <PassageListing
          changePassageTo={changePassageTo}
          changeTitleTo={changeTitleTo}
          title='500 wpm'
          content='This is a one hundred word short story'
          resetIndex={resetIndex}
        />
      </ListGroup>
    </div>
  );
};

export default Sidebar;
