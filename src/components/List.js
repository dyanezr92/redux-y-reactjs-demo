import React from 'react'
import PropTypes from 'prop-types'
import InfoMessage from './InfoMessage'

const List = ({ elements, emptyMessage, children }) => {

  const emptyListWarning =
    elements.length === 0 && emptyMessage
      ? <InfoMessage text={ emptyMessage }/> : null;

  return (
    <div>
      { emptyListWarning }
      { children }
    </div>
  );
};

List.propTypes = {
  elements: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string.isRequired
}

export default List
