import React from 'react'

import { Media, Content, Image } from 'reactbulma'

const AsanaImage = ({asana}) => (
	<Media.Content>
		<Content>
			<Image is='128x128' className='asana-image' src={asana.image} />
		</Content>
	</Media.Content>
)

export default AsanaImage