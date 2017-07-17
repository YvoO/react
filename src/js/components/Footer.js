import React from "react";
import ReactDOM from "react-dom";
import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from "react-router-dom";

export default class Footer extends React.Component {
	render(){
		return (
		    <footer>
			    <div class="row">
			        <div class="col-lg-12">
			        	<p> Copyright Killernews </p>
			        </div>
			    </div>
		    </footer>
		);
	}


}