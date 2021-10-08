import React , {Component} from 'react'
import '../App.css';

export default class Items extends Component {
	render() {
		const foodItems = this.props.items.map((item) => (
            <div className="items" key={item.itemno}>
            	<div className="thumbnail">
            	<a href={`#${item.itemno}`} onClick={(e) => this.props.handleAddToCart(e, item)}>
            		<img className="food-image" src={`/food-items/${item.itemno}.jpg`} alt={item.name} style={{"height" : "180px" , "width" : "280px"}}/>
            	</a>
            	<div className="item-footer">
					<div className="item-details">
						<b className="item-name">{item.name}</b>
						<b className="item-price">Rs {item.price}</b>
					</div>
					<button className="cart-btn" onClick={(e) => this.props.handleAddToCart(e , item)}>Add</button>
            	</div>
            	</div>
            </div>
        ));

		return (
			<div>
                        <div className="food-items row">
                              <p className="total-items">{this.props.count} items found</p>
							  <div className="menu-items">{foodItems}</div>
                        </div>
			</div>
		)
	}
}