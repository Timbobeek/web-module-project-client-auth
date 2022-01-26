import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react"


const AddFriend = (props) => {

    const [ state, setState ] = useState( {
      info: {
        name: '',
        age: ''
      }
    });

    const history = useHistory();
    
    const handleChange = e => {
      setState({
        info: {
          ...state.info,
          [e.target.name]: e.target.value
        }
      });
    };
  
    const submit = e => {
      e.preventDefault();
      axios.post('http://localhost:9000/api/friends', state.info,{
        headers: {
          authorization: localStorage.getItem('token')
        }
      }) 
      .then(response =>{
        // localStorage.setItem('token', response.data.token);
        history.push('/friends');
        
      })
      .catch(error => {
        console.log(error);
      })
    };

    return (
      <div>
        <h1>Add Friend</h1>
        <form onSubmit={submit}>
          Friend Name:
          <input
            type="text"
            name="name"
            value={state.info.name}
            onChange={handleChange}>
            </input>
          Friend Age:
          <input
            type="text"
            name="age"
            value={state.info.age}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      )
  }



export default AddFriend;