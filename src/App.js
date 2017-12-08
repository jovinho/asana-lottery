import React, { Component } from 'react';
import './App.css';
import { Hero, Container, Title, SubTitle, Button } from 'reactbulma'

class App extends Component {
  render() {
    return (
			<Hero dark fullheight>
				<Hero.Body>
					<Container className="main-container">
						<img className="derose-logo" src="/images/derose.png" alt="DeRose Method" />
						<Title className="main-title">
							Sorteio de Ásanas
						</Title>
						<SubTitle>
							<Button large className="main-button">Começar</Button>
						</SubTitle>
					</Container>
				</Hero.Body>
			</Hero>
		)
  }
}

export default App;