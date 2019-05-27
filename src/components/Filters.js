import React from "react";
import PropTypes from 'prop-types';

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

Filters.propTypes={
	methodInputChange:PropTypes.func.isRequired,
	value:PropTypes.string.isRequired
}
