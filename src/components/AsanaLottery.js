import React, { Component } from 'react';
import axios from 'axios'
import { Hero, Container } from 'reactbulma'
import AsanaGroup from './AsanaGroup'

class AsanaLottery extends Component {
	constructor(props) {
    super(props)
    this.state = {
			asanaApi: null,
			uiAsanas: null,
			showingAsana: null
		}
	}

	async componentDidMount() {
		var result = await axios.get('/api.json')
		this.setState({ asanaApi: result.data, uiAsanas: result.data.asanas })
	}

	onSortAsana() {
		console.log(this.state)
		//if (!!this.state.showingAsana) {
		const key = Math.floor(Math.random() * (this.state.uiAsanas.length - 0.1))
		this.setState({ showingAsana: this.state.uiAsanas[key] })
		//}
	}

  render() {
		return (
			<Hero dark bold fullheight>
				<Hero.Body>
					<Container className="main-container">
						<AsanaGroup onSortAsana={this.onSortAsana.bind(this)} asana={this.state.showingAsana}/>
					</Container>
				</Hero.Body>
			</Hero>)
  }
}

export default AsanaLottery;