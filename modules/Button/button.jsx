'use strict';
import "./button.less";
import React,{ PropTypes } from "react";
import classnames from "classnames";

class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = { text:this.props.text}
	}

	handleClick(e){
		if(this.props.onClick){
			this.props.onClick(e);
		}

	}
	render(){
		let className = classnames('btn',this.props.className);
		return (
			<button type="button" style={this.props.style}
					onClick={this.handleClick.bind(this)}
					className={className}
					disabled={this.props.disabled} >
					{this.state.text}
					{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	style:PropTypes.object,
	onClick:PropTypes.func,
	className:PropTypes.string,
	disabled:PropTypes.bool,
	text:PropTypes.string,
	children:PropTypes.any
}
export { Button as default };
