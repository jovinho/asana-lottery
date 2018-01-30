import React, { Component } from 'react';

import { Box, Button, Title, Media, Content, Icon} from 'reactbulma'
import AsanaName from './AsanaName'
import AsanaImage from './AsanaImage'
import AsanaInfoModal from './AsanaInfoModal'

const displayModes = {
	NAME: 'NAME',
	IMAGE: 'IMAGE'
}

class AsanaGroup extends Component {
	constructor(props) {
    super(props)
    this.state = {
			displayMode: displayModes.NAME,
			isShowingModal: false
		}
	}

	onClickDisplayMode() {
		if (this.state.displayMode === displayModes.NAME) {
			this.setState({ displayMode: displayModes.IMAGE })
		} else {
			this.setState({ displayMode: displayModes.NAME })
		}
	}

	onClickInfo () {
		this.setState({ isShowingModal: !this.state.isShowingModal })
	}

	closeModal() {
		this.setState({ isShowingModal: false })
	}

	getAsanaBoxClassName() {
		const className = 'asana-box'
		if (this.state.displayMode === displayModes.IMAGE) {
			return `${className} open`
		} else {
			return className
		}
	}

	render() {
		if (this.props.asana !== null && this.props.asana !== undefined) {
			return (
				<article className="asana-article">
					<Box className={this.getAsanaBoxClassName()}>
						<div className="asana-box-front">
							<Media className="media-asana-box">
								<AsanaName asana={this.props.asana} />
							</Media>
							<div className="box-footer">
								<Icon onClick={this.onClickInfo.bind(this)}>
									<i className="fa fa-question asana-icon"/>
								</Icon>
								<Icon onClick={this.onClickDisplayMode.bind(this)}>
									<i className="fa fa-picture-o asana-icon"/>
								</Icon>
							</div>
						</div>
						<div className="asana-box-back">
							<Media className="media-asana-box">
								<AsanaImage asana={this.props.asana} />
							</Media>
							<div className="box-footer">
								<Icon onClick={this.onClickInfo.bind(this)}>
									<i className="fa fa-question asana-icon"/>
								</Icon>
								<Icon onClick={this.onClickDisplayMode.bind(this)}>
									<i className="fa fa-picture-o asana-icon"/>
								</Icon>
							</div>
						</div>
					</Box>
					<Button info large onClick={() => {
						this.setState({ displayMode: displayModes.NAME })
						this.props.onSortAsana()
					}}> Sortear! </Button>

					<AsanaInfoModal isOpen={this.state.isShowingModal} closeModal={this.closeModal.bind(this)}/>
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