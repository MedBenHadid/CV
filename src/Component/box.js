import React, {Component} from "react";

class Box extends React.Component{
	render(){
		return(	
				<div className="val1">-{this.props.val1}</div>
		);
	}
}

export default Box;