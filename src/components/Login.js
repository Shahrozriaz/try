import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form ,FormGroup ,  ControlLabel , FormControl ,Button  } from 'react-bootstrap';
import firebase from 'firebase';



class Login extends Component{
   constructor(){
       super();
      this.State={
          username : "",
          email : "",
          password : ""
      } 
   }
   onChangeHandler(e){
     this.setState( { [e.target.name ]: e.target.value })
   }

  submit(e){
    e.preventDefault();
   
    firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.password )
    .then(res => {
  console.log(res)
    })
    
    .catch((error) => {
        console.log(  'error' , error )
      });



    console.log(this.state)
  }

    render(){
        return(
       <div>
                 <h1>Login Page</h1>
                <Link to="/signup">Create Acount...! </Link> 
              
     <Form inline>
         <FormGroup controlId="formInlineName">
         <ControlLabel>Name</ControlLabel>{' '}
         <FormControl type="text" name='username' onChange={this.onChangeHandler.bind(this)} placeholder="Jane Doe" />
         </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
        <ControlLabel>Email</ControlLabel>{' '}
        <FormControl type="email" name='email' onChange={this.onChangeHandler.bind(this)} placeholder="jane.doe@example.com" />
      </FormGroup>{' '}
      <FormGroup controlId="formInlinePassword">
        <ControlLabel>Password</ControlLabel>{' '}
        <FormControl type="password"  name='password' onChange={this.onChangeHandler.bind(this)} />
      </FormGroup>{' '}
      <Button type="submit" onClick={this.submit.bind(this)}>Submit</Button>
   </Form>; 
    
        </div>   

        );
    }
}


export default Login;