import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {

      username: '',
      password: ''
    };
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(field, event) {
    const value = event.target.value
    const name = event.target.name
    // const name = target.type === 'text' ? target.name : target.name

    this.setState({
      [field]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    let username = this.state.username
    let password = this.state.password

    if (!username || !password) {
      return
    }
    debugger;

    this.props.onSubmit({username, password})

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" name='username' value={this.state.username} onChange={this.handleInputChange.bind(this, 'username')} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
