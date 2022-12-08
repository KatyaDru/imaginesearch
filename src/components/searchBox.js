import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div><h3>Enter your keywords:</h3>
			<input
			  className='ba pa2 br2 input-reset mb3 bw1 ma'
			  type='search'
			  placeholder='search promts'
			  onChange={searchChange}
			/>
		</div>	  
	);
}

export default SearchBox;