import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import UserText from './UserText'

const UserTextList = ({ elements, elementName, onDeleteClick }) => {

  return (
    <List elements={ elements } emptyMessage={ "No " + elementName + ", dude!" } onDeleteElementClick={ onDeleteClick }>
      { elements.map(
          (userText, i) =>
            <UserText key={userText.id} text={userText.text} author={userText.author} id={userText.id} onDeleteClick={onDeleteClick} />
        )
      }
    </List>
  );
};

UserTextList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string
  }).isRequired).isRequired,
  elementName: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default UserTextList
