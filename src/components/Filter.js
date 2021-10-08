import React , {Component} from 'react'

export default class Filter extends Component {
	render() {
		return (
			<div className="row filter">
				<div className="container search-input">
    				<input type="text" placeholder="Search for dishes..." className="searchbar" onChange={(e) => this.props.handleInput(e)}  />
  				</div>
				<div className="cuisines-filter">
					<select value={this.props.type}
					onChange={this.props.handleChangeCuisines}>
						<option value="" readOnly>Cuisines</option>
						<option value="South Indian">South Indian</option>
                        <option value="North Indian">North Indian</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Street Food">Street Food</option>
                        <option value="Pizza">Pizzas</option>
					</select>
				</div>
			</div>
		)
	}
}