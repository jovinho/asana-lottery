import React from 'react'

import { Media, Content, Image } from 'reactbulma'

const AsanaImage = ({asana}) => (
	<Media.Content>
		<Content>
			<Image is='256x256' src={asana.image} />
		</Content>
	</Media.Content>
)

export default AsanaImage