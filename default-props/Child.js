import React from "react";

 export default class Child extends React.Component{
   static defaultProps = {
     name: "Chase",
     favoritePokemon: "The Gear one",
   }
	render() {
		return (
			<div>
				Child
			</div>
		)
	}
}
