import React from "react";

class Filters extends React.Component {
	render() {
		const { methodInputChange } = this.props;
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
}
export default Filters;
