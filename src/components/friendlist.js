import React from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";


class Friendlist extends React.Component{
  state = {
    friends: []
  };
  componentDidMount(){
    axiosWithAuth().get('http://localhost:9000/api/friends'
    )
    .then(res => {
      this.setState({
        friends: res.data
    });
  })
    .catch(err =>{
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <h1>Friends L1st</h1>
        <p>{
          this.state.friends.map(friend => {
            return <li key={friend.id}> {friend.name} , {friend.age} </li>
          })
        }</p>
      </div>
    )
  }
}




export default Friendlist;