import React, { Component } from 'react';
import './App.css';
import { Hero, Container, Title, SubTitle, Button } from 'reactbulma'
import Main from './components/Main'

class App extends Component {
	constructor(props) {
    super(props)
    this.state = {
			SHOWING_COMPONENT: 'MAIN'
		}
	}

	onStartClick() {
		this.setState({ SHOWING_COMPONENT: 'LOTTERY' })
	}

  render() {
		switch(this.state.SHOWING_COMPONENT) {
			case 'MAIN':
				return (<Main onStartClick={this.onStartClick.bind(this)}/>)
			case 'LOTTERY':
				return (<h1> SORTEIO </h1>)
		}
  }
}

export default App;