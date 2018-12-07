import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
export default class Facebook extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            picture: ''
        }
    }
    Response = (response)=>{
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            picture: response.picture.data.url
        })
    }
  render() {
      let fbContent;
      return (
       <React.Fragment>
     { this.state.isLoggedIn === true &&
        <div>
            <img className="profilePic" src={this.state.picture} alt={this.state.name}/>
            <h2>Hey there, {this.state.name}.</h2>
        </div> 
     }
     {

     this.state.isLoggedIn === false &&
     <FacebookLogin
        appId="352901198596530"
        autoLoad={true}
        fields="name,picture"
        callback={this.Response}/>
     }
      </React.Fragment>
    )
  }
}
