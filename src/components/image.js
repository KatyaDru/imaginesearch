import React, { useState, useEffect } from 'react';

const ImageBg = ({ url }) => {
	
	const [show, setShow] = useState(false);

	const fetchImg = ()=>{
		let image = new Image();
		image.src = url;
		image.onload = ()=>{
	   		setShow(true);
		}	
	}

	useEffect(fetchImg, [url]);

	return ( 
		<div style={{margin:'auto',
			width:'200px',
			height:'200px',
			backgroundImage:`url('/Loading.gif')`,
			backgroundSize:'cover',
			backgroundPosition:'center'}} >
				<img src={url} style={{width:'100%',
					height:'100%',
					objectFit:'cover',
					opacity:`${show?1:0}`}}
					 loading='lazy' alt='imagine'/>
		</div>
	);
}


export default ImageBg;