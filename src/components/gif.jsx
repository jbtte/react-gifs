import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focus: false
    }
  }

  handleClick = (event) => {
    this.props.selectedGif(this.props.id);
  }

  focus = (event) => {
    this.setState({
      focus: !this.state.focus
    });
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className= {`gif ${this.state.focus ? "focused-gif" : ""}`}
      onClick={this.handleClick}
      onMouseEnter={this.focus}
      onMouseLeave={this.focus}/>
    );
  }
}

export default Gif;
