import React from "react";
import ReactDOM from "react-dom";
import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from "react-router-dom";

import Home from "./pages/Home";
import Submit from "./pages/Submit";

const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/submit">Submit</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/submit" component={Submit} />
		</div>
	</Router>
, app);