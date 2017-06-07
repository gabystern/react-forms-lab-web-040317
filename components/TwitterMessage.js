import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(maxChars) {
    super();

    this.maxChars = maxChars
    this.state = {
      value: '',
      count: 0
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
      this.setState({
        value: event.target.value,
        count: this.state.count+1
      })
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.count}</p>
      </div>
    );
  }
}
