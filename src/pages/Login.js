import React from 'react';
import * as Style from './style.js'; 

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.props.initiate();
    }

    render(){
        return(
            <>
                <Style.Text>Login</Style.Text>
            </>
        );
    }
}