import React, {Component} from "react";

class Box3 extends React.Component{
	render(){
		return(
		
				<div>
				<div className="val3">*{this.props.val3}({this.props.date})</div> 
					<div className="des">{this.props.des}</div>
				</div>
     		
		);
	}
}

export default Box3;