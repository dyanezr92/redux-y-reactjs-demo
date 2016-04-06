import React from "react";

const Picture = ({ title, src }) => (
  <div>
    <h1 className="text-center">{ title }</h1>
    <img src={ src } className="img-thumbnail img-responsive center-block"/>
  </div>
);

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


class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = { comments: [] }
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  onCommentSubmit(comment) {
    this.setState({ comments: [ ...this.state.comments, comment ] });
  }

  render() {
    return (
      <div>
        <CommentsList comments={ this.state.comments } />
        <CommentForm onCommentSubmit={ this.onCommentSubmit } />
      </div>
    );
  }
}

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
