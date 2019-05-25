import React from "react";

function Filters(props) {
	const { methodInputChange } = props;
	return (
		<div>
			<label htmlFor='search' />
			<input
				onChange={methodInputChange}
				type='text'
				placeholder='Write a name...'
			/>
		</div>
	);
}
export default Filters;
