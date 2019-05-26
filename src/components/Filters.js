import React from "react";

function Filters(props) {
	const { methodInputChange } = props;
	return (
		<div className='filter--box'>
			<label htmlFor='search' />
			<input
				className='input--box'
				onChange={methodInputChange}
				type='text'
				placeholder='Write a name...'
			/>
		</div>
	);
}
export default Filters;
