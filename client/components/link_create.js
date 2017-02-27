import React, { Component } from 'react';

class LinkCreate extends Component {

  //class based components must use render method, which must return jsx

  handleSubmit(event){
event.preventDefault();
    console.log(this.refs.input.value);
  }

  render(){
  return(
    /*if 'this' isn't bound, it refers to the global object */
    <form onSubmit={this.handleSubmit.bind(this)}>
    <div className="form-group">
    <label> Link to shorten </label>
    <input ref="input" className="form-control" />
    </div>
    <button className="btn btn-primary">Shorten!</button>
    </form>
  );
}

}

export default LinkCreate;
