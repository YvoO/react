import React from "react";
import ReactDOM from "react-dom";
import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from "react-router-dom";

export default class Navbar extends React.Component {
	render(){
		return (
		    <nav class="navbar navbar-inverse">
		      <div class="container-fluid">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          <a class="navbar-brand" href="#">Brand</a>
		        </div>

		        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
		          <ul class="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/submit">Submit</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}


}