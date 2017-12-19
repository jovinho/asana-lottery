import React, { Component } from 'react';

import { Box, Button, Title, SubTitle, Media, Image, Level, Content, Icon, Heading} from 'reactbulma'
import AsanaName from './AsanaName'
import AsanaImage from './AsanaImage'

const displayModes = {
	NAME: 'NAME',
	IMAGE: 'IMAGE'
}

class AsanaGroup extends Component {
	constructor(props) {
    super(props)
    this.state = {
			displayMode: displayModes.NAME
		}
	}

	onClickDisplayMode() {
		console.log('ONCLICK')
		if (this.state.displayMode === displayModes.NAME) {
			this.setState({ displayMode: displayModes.IMAGE })
			console.log('CHANGED 1', this.state)
		} else {
			console.log('CHANGED 1', this.state)
			this.setState({ displayMode: displayModes.NAME })
		}
	}

	render() {
		console.log('DISPLAY MODE', this.state.displayMode)
		if (this.props.asana !== null && this.props.asana !== undefined) {
			return (
				<article className="asana-article">
					<Box className="asana-box">
						<div class="asana-box-front">
							<Media className="media-asana-box">
								<AsanaName asana={this.props.asana} />
							</Media>
							<div className="box-footer">
								<Icon>
									<i className="fa fa-question asana-icon"/>
								</Icon>
								<Icon onClick={this.onClickDisplayMode.bind(this)}>
									<i className="fa fa-picture-o asana-icon"/>
								</Icon>
							</div>
						</div>
						<div class="asana-box-back">
							<Media className="media-asana-box">
								<AsanaImage asana={this.props.asana} />
							</Media>
							<div className="box-footer">
								<Icon>
									<i className="fa fa-question asana-icon"/>
								</Icon>
								<Icon onClick={this.onClickDisplayMode.bind(this)}>
									<i className="fa fa-picture-o asana-icon"/>
								</Icon>
							</div>
						</div>
					</Box>
					<Button info large onClick={this.props.onSortAsana}> Sortear! </Button>
				</article>
			)
		} else {
			return (
				<article className="asana-article">
					<Box className="asana-box">
						<Media>
							<Media.Content>
								<Content>
									<Title className="asana-title">
										Você ainda não sorteou nenhum Ásana!
									</Title>
								</Content>
							</Media.Content>
						</Media>
					</Box>
					<Button info large onClick={this.props.onSortAsana}> Sortear! </Button>
				</article>
			)
		}
	}
}

export default AsanaGroup