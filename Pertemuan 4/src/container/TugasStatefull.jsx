import React, { Component } from 'react';

export default class TugasStatefull extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: '',
      password: '',
      check: false
    }
  }

  onChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      username: '',
      password: '',
      check: false
    })
  }

  render() {
    return (
      <div className="tugasstatefull">
        <h2 className="text-center">Form Login Statefull</h2>
        <div className="box">
          <h1 className="text-center">Tugas Pertemuan Ketiga</h1>
          <form onSubmit={this.onSubmit}>
            <div className="username mt-6">
              <h3 className="mt-6 d-inline ml-3">Username</h3>
              <input type="text" className="d-inline ml-4 pl-2" placeholder="Masukkan Username" value={this.state.username} onChange={event => this.onChange('username', event.target.value)} />
            </div>
            <div className="password mt-2">
              <h3 className="mt-6 d-inline ml-3 pt-2">Password</h3>
              <input type="password" className="d-inline ml-47 pl-2" placeholder="Masukkan Password" value={this.state.password} onChange={event => this.onChange('password', event.target.value)} />
            </div>
            <button className="mt-2 btn-green-center-full">Login</button>
            <div className="mt-2 text-center">
              <input type="checkbox" checked={this.state.check} onChange={event => this.onChange('check', !this.state.check)}></input>
              <label> Remember Me</label>
            </div>
            <button className="h-40 bg-red b-none text-white px-2 d-flex m-0-auto mt-2">Cancel</button>
          </form>
        </div>
      </div>
    )
  }
}
