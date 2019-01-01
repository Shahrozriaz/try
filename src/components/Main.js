import React, { Component } from 'react';
import firebase from 'firebase';
 




class Main extends Component{
  constructor(){
      super();
  
  var self = this;
      firebase.auth().onAuthStateChanged(function (user){
    if(user){
          const uid = user.userid ;
      firebase.database().ref('/users/' + uid).once('value')
      .then( (snapshot) =>  {
          const userobj = snapshot.val();
          localStorage.setItem("user" , JSON.stringify(userobj));
         self.props.history.push('/home')
      }
      )}
      else{
          self.props.history.push('/login');
      }
});
  }

//     how we add hardcore data in firebase
//   addData(){
//       const data = {
//           username : 'shahroz',
//           No : '12345'
//       }
//       const tryref = firebase.database().ref('Try/')
//       tryref.push(data).then( res => {
//           console.log( 'sucess ' , res)
//       }) 
//       console.log('inside the funcion');
  
//     }

  
    render(){
        return(
            <div>
          
            </div>   
            
            // <button onClick={this.addData.bind(this)}>SAVE</button>
        );
    }
}


export default Main;