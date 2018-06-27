import { connect } from 'react-redux'
import { deleteComment,  addComment } from '../actions'
import UserTextSection from '../components/UserTextSection'
import { getComments } from '../reducers/commentsReducer'

const mapStateToProps = (state) => ({
    elements: getComments(state),
    elementName: "comments"
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick:  (id) => dispatch(deleteComment(id)),
  onSubmit: ({text, author}) => {dispatch(addComment({text, author}))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTextSection)
