// React
import React, { Component } from 'react'

// Styled components
import styled, { keyframes } from 'styled-components'


class LoginScreen extends Component {


  authenticate = type => {
    this.props.authenticate(type)
  }

  renderLogin = () => {
    return (
      <AnthenticateContainer>
        <p>Log in with :</p>
        <Google className='loginElement' onClick={ () => this.authenticate('google') }>Google</Google>
        <Facebook className='loginElement' onClick={ () => this.authenticate('facebook') }>Facebook</Facebook>
      </AnthenticateContainer>
    )
  }

  render () {
    return (
      <Container className="loginScreen loginElement" ref='container'>
      <Hero className='loginElement'>
        <h3 className='loginElement'>Connexion.</h3>
      </Hero>
      <Quit onClick={ this.props.displayLoginScreen } className='loginElement'><i className="fa fa-angle-double-left"></i></Quit>
        <Form onSubmit={e => this.props.login(e) } className='loginForm loginElement'>
            <Input required placeholder='Identifiant' className='id loginElement'/>
            <Input required placeholder='Mot de passe' type='password' className='password loginElement'/>
            <Button type="submit" className='loginElement'>Valider</Button>
        </Form>
          { this.renderLogin() }
      </Container>
    )
  }
}

/* STYLE */

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const AnthenticateContainer = styled.div`
  position: absolute;
  bottom: 10px;

  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
`

const Container = styled.div`
  width: 500px;
  height: 600px;

  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 10px 10px 50px grey;
  background-color: white;
  border: none;
  transition: .3s;

  display: flex;
  justify-content: center;
  align-item: center;

  animation: ${fadeIn} .3s ease;
`

const Hero = styled.div`
position: absolute;
top: 0;
left: 0;

width: 100%;
height: 100px;

background-color: #212121;

h3 {
  font-size: 2em;
  color: white;
  text-align: center;
  margin-top: 30px;
}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-top: -10%;
`

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #F5F5F5;

  margin-top: 20%;
  padding-left: 10px;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";      
  transition: .3s;

  &:focus {
    outline: none;
    border-bottom: 1px solid #F5F5F5;
    transition: .3s;
  }
`

const Button = styled.button`
  margin: 50px auto;
  text-align: center;
  border-radius: 2px;
  width: 180px;
  height: 40px;
  background-color: #F5F5F5;
  color: #212121;

  border: 1px solid #F5F5F5;
  transition: .3s;

  &:hover {
    cursor: pointer;
    background-color: #EEEEEE;
    transition: .3s;
  }

  &:focus {
    outline: none;
  }
`

const Facebook = styled.button`
  text-align: center;
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 2px;
  background-color: #1976D2;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const Google = styled.button`
  text-align: center;
  width: 180px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 2px;
  background-color: #EF5350;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const Quit = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  border: none;
  color: white;
  transform: scale(2);

  transition: .4s;

  &:hover {
    cursor: pointer;
    transform: scale(2.6);
    transition: .4s;
  }
  &:focus {
    outline: none;
  }
`

export default LoginScreen
