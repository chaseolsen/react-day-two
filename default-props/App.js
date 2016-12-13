import React from "react";
import Child from './Child.js';

export default class Child extends React.Components{
	render() {
		return (
			<div>
				App
				<Child />
			</div>
		)
	}
}
