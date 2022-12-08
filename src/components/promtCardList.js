import React from 'react';
import PromtCard from './promtCard';


const PromtCardList = ({ promts }) => {

	return ( 
		<div>
		{
			promts.map((item) => {
				if (item.content.includes('**')) {
					return (<PromtCard
							key={item.id}
							id={item.id}
							type={item.type}
							content={item.content}
							url={item.url}
							/>
					);
				}
				return null;
			})
		}
		</div>	
	);
}

export default PromtCardList;




