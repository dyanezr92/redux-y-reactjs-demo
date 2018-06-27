import React from 'react'
import PropTypes from 'prop-types'
import TitleCounter from './TitleCounter'

const HeaderWithPicture = ({ title, src, numComments, numComplaints }) => (
  <div>
    <h1 className="text-center">{ title }</h1>
    <TitleCounter numElements={ numComments } elementsName="comments" />
    <TitleCounter numElements={ numComplaints } elementsName="complaints" />

    <img alt="Header" src={ src } className="img-thumbnail img-responsive center-block"/>
  </div>
);

HeaderWithPicture.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  numComments: PropTypes.number.isRequired,
  numComplaints: PropTypes.number.isRequired
}

export default HeaderWithPicture
