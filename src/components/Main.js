import React from 'react';
import { Hero, Container, Title, SubTitle, Button } from 'reactbulma'

const Main = ({onStartClick}) => (
	<Hero dark bold fullheight>
		<Hero.Body>
			<Container className="main-container">
				<img className="derose-logo" src="/images/derose.png" alt="DeRose Method" />
				<Title className="main-title">
					Sorteio de Ásanas
				</Title>
				<SubTitle>
					<Button onClick={onStartClick} large light className="main-button">Começar</Button>
				</SubTitle>
			</Container>
		</Hero.Body>
	</Hero>
)

export default Main