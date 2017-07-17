import React from "react";
import Title from "../components/Title";

export default class Submit extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
		};
	}
	changeTitle(title){
		this.setState({title});
	}
	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
			<div>
				<h1>Submit</h1>
				<Title changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<input value={this.state.title} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}