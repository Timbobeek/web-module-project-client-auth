import React from "react";
import axios from "axios";


class Friendlist extends React.Component{
  state = {
    friends: []
  };
  componentDidMount(){
    //console.log('comp mounted');
    axios.get('http://localhost:9000/api/friends',{
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }
  render(){
    return(
      <div>
        <h1>Friends L1st</h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
} 


export default Friendlist;