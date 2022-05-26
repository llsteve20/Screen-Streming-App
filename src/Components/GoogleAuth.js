import React, {Component} from "react";
import { connect } from "react-redux";

import {signIn, signOut} from '../Actions'

class GoogleAuth extends Component {
  
    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '514422051879-p0gcdbr8hh0g4t8ajbo75hi3ca958eii.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: "streamy"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });   
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else{
            this.props.signOut();
        }
    };

    onClickSignIn = () => {
        this.auth.signIn();
    };

    onClickSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return (
                <button onClick={this.onClickSignOut} className="ui google button">
                   <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onClickSignIn} className="ui google button">
                    <i className="google icon" />
                    Sign In 
                </button>
            );
        }
    }

    render (){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);