import React from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";

  class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      //console.log(this.state.credentials);
      axios.post('http://localhost:9000/api/login/', this.state.credentials) /// 9000 is backend, 3000 is frontend
      .then(response =>{
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token);
        this.props.history.push('/friendlist')

      })
      .catch(error => {
        console.log(error);
      })
    };

    render(){
      // console.log(this.state);
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}>
            </input>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      )
    }
  }



export default Login;