import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import AsanaLottery from './components/AsanaLottery'

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
			default:
				return (<Main onStartClick={this.onStartClick.bind(this)}/>)
			case 'LOTTERY':
				return (<AsanaLottery />)
		}
  }
}

export default App;