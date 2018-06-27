import { connect } from 'react-redux'
import { deleteComplaint,  addComplaint } from '../actions'
import UserTextSection from '../components/UserTextSection'
import { getComplaints } from '../reducers/complaintsReducer'

const mapStateToProps = (state) => ({
    elements: getComplaints(state),
    elementName: "complaints"
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick:  (id) => dispatch(deleteComplaint(id)),
  onSubmit: ({text, author}) => dispatch(addComplaint({text, author}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTextSection)
