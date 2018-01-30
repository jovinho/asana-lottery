import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AsanaGroup from './AsanaGroup';
import { Box, Media, AsanaName, Icon, Title, SubTitle } from 'reactbulma';

class AsanaInfoModal extends Component {
	render() {
		return (<ReactModal
			isOpen={this.props.isOpen}
			closeModal={this.props.closeModal}
			onRequestClose={this.props.closeModal}
			ariaHideApp={false}
			closeTimeoutMS={100}
			style={{
				overlay : {
					position          : 'fixed',
					top               : 0,
					left              : 0,
					right             : 0,
					bottom            : 0,
					backgroundColor   : 'rgba(255, 255, 255, 0.75)'
				},
				content : {
					position                   : 'absolute',
					border                     : '1px solid #ccc',
					background                 : '#fff',
					overflow                   : 'auto',
					WebkitOverflowScrolling    : 'touch',
					borderRadius               : '4px',
					outline                    : 'none',
          padding										 : 0,
          top                        : '50%',
          left                       : '50%',
          right                      : 'initial',
          bottom                     : 'initial',
          transform                  : 'translate(-50%,-50%)',
				}
			}}
			contentLabel="Ásana Info"
			shouldFocusAfterRender={true}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			shouldReturnFocusAfterClose={true}
			role="dialog"
			parentSelector={() => document.body}>
				<Box className="asana-info-box">
					<div className="asana-info-content">
            <Icon className="asana-icon" onClick={this.props.closeModal} style={{position: 'absolute', left: '90%' }}>
							<i className="fa fa-close"/>
						</Icon>
						<Media className="media-asana-info-box">
							<Title>1 - Shavásana</Title>
							<SubTitle is='4'>Categoria - Deitado</SubTitle>
							<SubTitle is='5'>Dicas - As mãos e pés se afastam levemente, encontrando o ponto de maior conforto. Oriente as palmas das mãos para cima.</SubTitle>
						</Media>
					</div>
				</Box>
		</ReactModal>)
	}
}

export default AsanaInfoModal
