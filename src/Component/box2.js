import React, {Component} from "react";

class Box2 extends React.Component{
	render(){
		return(
		
				<div>
				<div className="val3">*{this.props.val3}({this.props.date})</div> 
				</div>
     		
		);
	}
}

export default Box2;