import React from 'react'
import PropTypes from 'prop-types'

const UserText = ({ text, author, id, onDeleteClick }) => {
  const onDeleteUserTextClick = event => {
    event.preventDefault();
    onDeleteClick(id);
  };

  return <blockquote>
    <input type="hidden" value={id}/>

    {text}
    <footer>{ author }</footer>
    <img alt="Delete button" onClick={ onDeleteUserTextClick } src="https://wecision.com/wecision/images/icons/closeIcon.png" />
  </blockquote>
};

UserText.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default UserText
