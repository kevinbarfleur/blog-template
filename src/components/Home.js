// React
import React, { Component } from 'react'

// Components

// semantic-ui
//import { Header } from 'semantic-ui-react'

// Styled components
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Title>
          <Span>B</Span>log<Span>.</Span>
        </Title>
      </Container>
    )
  }
}

/* STYLE */
const Container = styled.div`
  width: 100vw;
`
const Title = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 8em;
  text-align: center;
  color: #212121;
  padding: 10%;
`

const Span = styled.span`
  color: #212121;
  font-size: 1em;
  text-shadow: -10px -10px #fff9c4, 10px -10px #f48fb1, -10px 10px #90caf9;
`

export default Home
