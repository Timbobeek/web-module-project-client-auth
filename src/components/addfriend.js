import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

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
      axiosWithAuth().post('http://localhost:9000/api/friends', this.state.info) 
      .then(response =>{
        // localStorage.setItem('token', response.data.token);
        this.props.history.push('/friends');
        
      })
      .catch(error => {
        console.log(error);
      })
    };

    render(){
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