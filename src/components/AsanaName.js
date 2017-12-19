import React from 'react'

import { Media, Content, Title } from 'reactbulma'

const AsanaName = ({asana}) => (
	<Media.Content>
		<Content>
			<Title className="asana-title">
				{asana.name}
			</Title>
		</Content>
	</Media.Content>
)

export default AsanaName