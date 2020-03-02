import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Style from './style.js';

export default class Inicio extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            login: false
        }
        this.toLogin = this.toLogin.bind(this)
;    }

    toLogin(){
        this.setState({
            login: true
        })
    }

    render(){

        return this.state.login ?

        (
            <>
                <Redirect to="/login" />
            </>
        ) :
        (
            <>
                <Style.Welcome>Bem vindo!</Style.Welcome>
                <Style.Greetings>Como é bom tê-lo conosco!</Style.Greetings>
                <Style.Button onClick={this.toLogin}>Iniciar</Style.Button>
            </>
        )
    }
}