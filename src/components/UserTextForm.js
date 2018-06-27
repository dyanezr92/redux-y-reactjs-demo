import React from 'react'
import PropTypes from 'prop-types'

class UserTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.author = React.createRef();
    this.content = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserTextSubmit({
      text: this.content.current.value,
      author: this.author.current.value
    });
    this.content.current.value = "";
    this.author.current.value = "";
  }

  render(){
    return <form onSubmit={this.handleSubmit}>

      <div className="form-group">
        <label>Your { this.props.elementName }</label>
        <textarea ref={ this.content } className="form-control"/>
      </div>

      <div className="form-group">
        <label>Your name</label>
        <input type="text" ref={ this.author } className="form-control" />
      </div>

      <div>
        <button type="submit" className="btn btn-default">Send the { this.props.elementName }!</button>
      </div>
    </form>
  };
};

UserTextForm.propTypes = {
  elementName: PropTypes.string.isRequired,
  onUserTextSubmit: PropTypes.func.isRequired
}

export default UserTextForm
