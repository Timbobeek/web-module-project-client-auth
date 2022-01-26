import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ThemeConsumer } from "styled-components";

  class AddFriend extends React.Component {


    
    state = {
      info: {
        name: '',
        age: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        info: {
          ...this.state.info,
          [e.target.name]: e.target.value
        }
      });
    };
  
    submit = e => {
      e.preventDefault();
      axios.post('http://localhost:9000/api/friends', this.state.info,{
        headers: {
          authorization: localStorage.getItem('token')
        }
      }) 
      .then(response =>{
        // console.log(response.data)
        this.props.history.push('/friends');
        // this.props.history.push('/friends')

      })
      .catch(error => {
        console.log(error);
      })
    };

    render(){
      // console.log(this.state);
    return (
      <div>
        <h1>Add Friend</h1>
        <form onSubmit={this.submit}>
          Friend Name:
          <input
            type="text"
            name="name"
            value={this.state.info.name}
            onChange={this.handleChange}>
            </input>
          Friend Age:
          <input
            type="text"
            name="age"
            value={this.state.info.age}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      )
    }
  }



export default AddFriend;