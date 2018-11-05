import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
//Facebook Login With Button Styles
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './App.css';
import axios from 'axios'



class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "John Smith",
            email: "Johnmutant@example.com",
            picture: "https://bulma.io/images/placeholders/96x96.png"
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook(response){
        console.log(response)
        
        this.setState({
            name:response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        var data1= {
            name:response.name,
            email: response.email,
            picture: response.picture.data.url
        }

        axios.post("http://localhost:3000/user",data1).then((res) =>{
            console.log(res)
        })

    }

    render(){
        return(
            <div className="App">
                <FacebookLogin 
                    appId='271329783587140'
                    fields = "name,email,picture"
                    callback={this.responseFacebook}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick}>Facebook</button>
                    )}
                />
                <div>
                    <figure>
                            <img src={this.state.picture} alt="Not found" />
                    </figure>
                </div>
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default Register;