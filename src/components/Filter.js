import React , {Component} from 'react'

export default class Filter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 text-center">
				{this.props.count} items found
				</div>
				<div className="col-md-4 text-center">
					<label>
					Select by Location
					<select className="form-control" value={this.props.location}
					onChange={this.props.handleChangeLocation}>
						<option value="">Select</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="E">E</option>
					</select>
					</label>
				</div>
				<div className="col-md-4 text-center">
				<label>
					Select by Type
					<select className="form-control" value={this.props.type}
					onChange={this.props.handleChangeType}>
						<option value="">Select</option>
						<option value="Veg">Veg</option>
						<option value="Non-Veg">Non-Veg</option>
					</select>
					</label>
				</div>
			</div>
		)
	}
}