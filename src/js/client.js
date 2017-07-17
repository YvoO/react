import React from "react";
import ReactDOM from "react-dom";
import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";

const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		<div>
			<Navbar />

			<Route exact path="/" component={Home} />
			<Route path="/submit" component={Submit} />

			<Footer />
		</div>
	</Router>
, app);