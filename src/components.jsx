import React from "react";

const Picture = ({ title, src, numComments, numComplaints }) => (
  <div>
    <h1 className="text-center">{ title }</h1>
    <h3 className="text-center">({ numComments } comments)</h3>
    <h3 className="text-center">({ numComplaints } complaints)</h3>
    <img src={ src } className="img-thumbnail img-responsive center-block"/>
  </div>
);

const EmptyMessage = ({ text }) => <p className="alert alert-info">{text}</p>;

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.onDeleteCommentClick = this.onDeleteCommentClick.bind(this);
  }

  onDeleteCommentClick() {
    event.preventDefault();
    this.props.onDeleteClick(this.props.index);
  }

  render() {
    const { author, comment } = this.props;
    return (
      <blockquote>
        {comment}
        <footer>{ author }</footer>
        <img onClick={ this.onDeleteCommentClick } src="https://wecision.com/wecision/images/icons/closeIcon.png" />
      </blockquote>
    );
  }
};

const CommentsList = ({ comments, name, onDeleteClick }) => {

  const emptyMessage = comments.length === 0 ?
    <EmptyMessage text={ "No " + name + "s, dude!" }/> :
    null;

  const commentsList = comments.map(
    (comment, i) => <Comment key={i} comment={comment.text} author={comment.author} index={i} onDeleteClick={onDeleteClick} />
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
    const name = this.props.name;
    return (
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Your { name }</label>
          <textarea ref="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Your name</label>
          <input type="text" ref="author" className="form-control" />
        </div>

        <div>
          <button type="submit" className="btn btn-default">Send the { name }!</button>
        </div>
      </form>
    );
  }
};


class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  onCommentSubmit({ text, author }) {
    this.props.onSubmit({ text: text, author: author });
  }

  render() {
    const comments = this.props.comments;
    const name = this.props.name;
    const onDeleteClick = this.props.onDeleteClick;

    return (
      <div className="col-sm-5" style={{ display: "inline-block", margin: 20 }}>
        <CommentsList comments={ comments } name={ name } onDeleteClick={onDeleteClick}/>
        <CommentForm onCommentSubmit={ this.onCommentSubmit } name={ name } />
      </div>
    );
  }
}

export default class CommentedPicture extends React.Component {

  constructor(props) {
    super(props);
    this.state = { comments: [], complaints: [] }
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onSubmitComplaint = this.onSubmitComplaint.bind(this);
    this.onDeleteCommentsClick = this.onDeleteCommentsClick.bind(this);
    this.onDeleteComplaintsClick = this.onDeleteComplaintsClick.bind(this);
  }

  onSubmitComment(comment) {
    this.setState({ comments: [ ...this.state.comments, comment ] });
  }

  onSubmitComplaint(complaint) {
    this.setState({ complaints: [ ...this.state.complaints, complaint ] });
  }

  onDeleteCommentsClick(index) {
    this.setState({ comments: this.state.comments.filter((element, i) => i !== index) });
  }

  onDeleteComplaintsClick(index) {
    this.setState({ complaints: this.state.complaints.filter((element, i) => i !== index) });
  }

  render() {
    const { comments, complaints } = this.state;
    return (
      <div className="col-sm-12">
        <Picture title="Awesome Finn" src="/static/finn.gif" numComments={ comments.length } numComplaints={ complaints.length }/>
          <Comments comments={ comments } onSubmit={this.onSubmitComment} name="comment" onDeleteClick={ this.onDeleteCommentsClick }/>
          <Comments comments={ complaints } onSubmit={this.onSubmitComplaint} name="complaint" onDeleteClick={ this.onDeleteComplaintsClick }/>
      </div>
    );
  }
}
