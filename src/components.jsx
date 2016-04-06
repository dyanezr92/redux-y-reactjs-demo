import React from "react";
import { connect } from "react-redux";
import { addComment } from "app/actions";


let Picture = ({ title, src, comments, loading }) => {

  const image = () => {
    if (loading) {
      return <img alt="Loading image..."/>;
    }

    if (src) {
      return <img src={ src } className="img-thumbnail img-responsive center-block"/>;
    }

    return null;
  }

  return (
    <div>
      <h1 className="text-center">{ title } <small>{comments} comments</small></h1>
      { image() }
    </div>
  );
};

Picture = connect(
  state => {
    return ({
      src: state.image.src,
      loading: state.image.loading,
      comments: state.comments.length
    })
  }
)(Picture);


const EmptyMessage = ({ text }) => <p className="alert alert-info">{text}</p>;

const Comment = ({ comment, author }) => (
  <blockquote>
    {comment}
    <footer>{ author }</footer>
  </blockquote>
);

const CommentsList = ({ comments }) => {

  const emptyMessage = comments.length === 0 ?
    <EmptyMessage text="No comments, dude!"/> :
    null;

  const commentsList = comments.map(
    (comment, i) => <Comment key={i} comment={comment.text} author={comment.author} />
  );

  return (
    <div>
      { emptyMessage }
      { commentsList }
    </div>
  );
};

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      text: this.refs.text.value,
      author: this.refs.author.value
    });

    this.refs.text.value = "";
    this.refs.author.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Your comment</label>
          <textarea ref="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Your name</label>
          <input type="text" ref="author" className="form-control" />
        </div>

        <div>
          <button type="submit" className="btn btn-default">Send the comment!</button>
        </div>
      </form>
    );
  }
};


let Comments = ({ comments, onCommentSubmit }) => (
  <div>
    <CommentsList comments={ comments } />
    <CommentForm onCommentSubmit={ onCommentSubmit } />
  </div>
);

Comments = connect(
  state => ({
    comments: state.comments
  }),

  dispatch => ({
    onCommentSubmit: (comment) => {
      dispatch(addComment(comment));
    }
  })
)(Comments);

export default class CommentedPicture extends React.Component {

  render() {
    return (
      <div className="col-sm-6">
        <Picture title="Awesome Finn" src="/static/finn.gif" />
        <Comments />
      </div>
    );
  }
}
