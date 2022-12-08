import React from 'react';
import ImageBg from './image'

const TYPENAME = {
	'0': 'First generated',
	'19': 'Users choice',
}

const PromtCard = ({ id, type, content, url }) => {

	const promtType = TYPENAME[type+''];

	return (
		<div className='tc dib ba br3 pa3 ma3 b--gray measure shadow-1'>
			  	<p className='pa2'>{content}</p>
			 <a href ={url} target='_blank' rel='noopener noreferrer'>
			 	<ImageBg url={url} />
		 	</a>
		 		<p className='pa2'>Type: {promtType}</p>
		</div>  
	);
}

export default PromtCard;