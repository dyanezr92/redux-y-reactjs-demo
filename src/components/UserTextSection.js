import React from 'react'
import PropTypes from 'prop-types'
import UserTextList from './UserTextList'
import UserTextForm from './UserTextForm'
import Col from './Col'

const UserTextSection = ({ elements, elementName, onDeleteClick, onSubmit }) => {

  return (
    <Col w={5} style={{ display: "inline-block", margin: 20 }}>
      <UserTextList elements={elements} elementName={elementName} onDeleteClick={onDeleteClick}/>
      <UserTextForm onUserTextSubmit={ onSubmit } elementName={ elementName } />
    </Col>
  );
};

UserTextSection.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string
  }).isRequired).isRequired,
  elementName: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default UserTextSection
