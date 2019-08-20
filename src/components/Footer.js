import React , {Component} from 'react';
import '../App.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer container-fluid">
				<div className="col-md-11">
					<a href='/'>Contact Us</a>
					<br/>
					<p style={{'margin' : '10px 0'}}>Good Food , Good Life :)</p> 
				</div>
				<div className='col-md-1'>
					<p>Follow Us</p>
					<div className="socials">
						<a href='#'><i className="fa fa-facebook fa-2x"></i></a>
						<a href='#'><i className="fa fa-instagram fa-2x"></i></a>
					</div>
				</div>
			</div>
		);
	}
}