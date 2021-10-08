import React , {Component} from 'react';
import '../App.css';

export default class BookTable extends Component {
	render() {
		return (
			<div className="book-table container-fluid">
				<div className="row">
					<div className='col-md-12'>
						<h6 className="book-table-heading">BOOK A TABLE</h6>
						<h3 className="book-table-now">Book a Table Now</h3>
						<p className="book-table-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.</p>
                        <button className="book-table-btn" >Book A Table</button>
					</div>
				</div>	
			</div>
		);
	}
}