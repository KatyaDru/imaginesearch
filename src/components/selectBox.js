import React from 'react';

const SelectBox = ({ selectChange }) => {
	return (
			<p> Select type of imagine promts:
			<select className='ba pa1 br3 input-reset mb3 bw1 ma1' onChange={selectChange}>
	            <option value="">All images</option>
	            <option value="0">First generated</option>
	            <option value="19">Users choice</option>
	        </select>
	        </p>
    );
}   

export default SelectBox;