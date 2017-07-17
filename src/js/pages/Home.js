import React from "react";

import News from "../components/News";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<News />
			</div>
		);
	}
}