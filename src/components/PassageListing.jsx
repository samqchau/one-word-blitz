import React from 'react'
import {ListGroupItem} from 'react-bootstrap';
import {parsePassage} from '../utils/helperFunctions'

const PassageListing = ({title, content, changePassageTo, changeTitleTo, resetIndex}) => {
    
    const clickHandler= () => {
        changePassageTo(parsePassage(content));
        changeTitleTo(title);
        resetIndex();
    }
    
    return (
        <ListGroupItem className='sidebar-passageList-listing' onClick={clickHandler}>
            {title}
        </ListGroupItem>
    )
}

export default PassageListing
