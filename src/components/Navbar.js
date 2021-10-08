import React , {Component} from 'react';
import '../App.css';

export default class Navbar extends Component {
	render() {
		return (
			<div className="Navbar container-fluid">
				<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				  <a className="navbar-brand" href="/"><b>Drools<span style={{'fontSize' : '30px'}}>&</span>Dine</b></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation" >
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="mainNav" >
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="/">Home</a>
				      </li>
				    </ul>
				    <div className="form-inline my-2 my-lg-0">
				    	<ul className="navbar-nav mr-auto">
				    		<li className="nav-item">
				    			<a href="/" className="nav-link">About us</a>
				    		</li>
				    		<li className="nav-item">
				    			<a href="/" className="nav-link">Contact</a>
				    		</li>
				    	</ul>
				    </div>
				  </div>
				</nav>
			</div>
		);
	}
}