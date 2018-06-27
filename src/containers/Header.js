import { connect } from 'react-redux'
import HeaderWithPicture from '../components/HeaderWithPicture'
import { getComments } from '../reducers/commentsReducer'
import { getComplaints } from '../reducers/complaintsReducer'

const mapStateToProps = (state, ownProps) => ({
  numComments: getComments(state).length,
  numComplaints: getComplaints(state).length,
  title: ownProps.title,
  src: ownProps.src
})

export default connect(
  mapStateToProps,
  null
)(HeaderWithPicture)
