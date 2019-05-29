import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
	const { methodInputChange, methodInputNumberChange } = props;
	return (
		<div>
			<div className='filter--box'>
				<label htmlFor='search' />
				<input
					className='input--box'
					onChange={methodInputChange}
					type='text'
					placeholder='Write a name...'
					//añadir value controlado
				/>
			</div>
			<div>
				<label htmlFor='wand'>Wand Size:</label>
				<input
					type='number'
					name='wand'
					id='wand'
					onChange={methodInputNumberChange}
				/>
			</div>
		</div>
	);
}
export default Filters;

Filters.propTypes = {
	methodInputChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};
