import React from 'react';

import { Box, Button, Title, SubTitle, Media, Image, Level, Content, Icon, Heading} from 'reactbulma'

const AsanaGroup = ({asana, onSortAsana}) => {
	if (asana !== null && asana !== undefined) {
		return (
			<article className="asana-article">
				<Box className="asana-box">
					<Media className="media-asana-box">
						<Media.Content>
							<Content>
								<Title className="asana-title">
									{asana.name}
								</Title>
							</Content>
						</Media.Content>
					</Media>
					<div class="box-footer">
						<Icon>
							<i className="fa fa-question asana-icon"/>
						</Icon>
						<Icon>
							<i className="fa fa-picture-o asana-icon"/>
						</Icon>
					</div>
				</Box>
				<Button info large onClick={onSortAsana}> Sortear! </Button>
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
			<Button info large onClick={onSortAsana}> Sortear! </Button>
		</article>
		)
	}
}

export default AsanaGroup