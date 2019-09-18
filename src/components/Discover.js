import React , {Component} from 'react';
import '../App.css';

export default class Discover extends Component {
	render() {
		return (
			<div className="Discover container-fluid">
				<div className="row">
					<div className='col-md-8 content'>
						<h2 className="discover-heading">Discover</h2>
						<h2 className="story-heading">Our Story</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div className='col-md-4 col-12'> 
						<img src='/food-items/1.jpg' className="text-center" alt='pic'/>
					</div>
				</div>	
			</div>
		);
	}
}