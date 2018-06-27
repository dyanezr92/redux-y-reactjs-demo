import React from 'react'
import PropTypes from 'prop-types'

const TitleCounter = ({ numElements, elementsName }) => (
  <h3 className="text-center">({ numElements } { elementsName })</h3>
);

TitleCounter.propTypes = {
  numElements: PropTypes.number.isRequired,
  elementsName: PropTypes.string.isRequired
}

export default TitleCounter
