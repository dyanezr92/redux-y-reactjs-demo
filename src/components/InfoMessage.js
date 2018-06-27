import React from 'react'
import PropTypes from 'prop-types'

const InfoMessage = ({ text }) => (
  <p className="alert alert-info">{text}</p>
)

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired
}

export default InfoMessage
