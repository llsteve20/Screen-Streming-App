import React, {Component} from "react";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '514422051879-p0gcdbr8hh0g4t8ajbo75hi3ca958eii.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render (){
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;