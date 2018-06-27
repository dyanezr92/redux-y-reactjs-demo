import React from 'react'
import PropTypes from 'prop-types'

const Col = (props) => (
  <div className={"col-sm-" + props.w} style={ props.style }>
    { props.children }
  </div>
);

Col.propTypes = {
  w: PropTypes.number.isRequired,
  style: PropTypes.object
}

export default Col
