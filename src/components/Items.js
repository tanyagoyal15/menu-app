import React , {Component} from 'react'
import '../App.css';

export default class Items extends Component {
	render() {
		const foodItems = this.props.items.map((item) => (
            <div className=" container-fluid items" key={item.itemno}>
            	<div className="thumbnail">
            	<a href={`#${item.itemno}`} onClick={(e) => this.props.handleAddToCart(e, item)}>
            		<img src={`/food-items/${item.itemno}.jpg`} alt={item.name} style={{"height" : "100px" , "width" : "200px"}}/>
            		<p className="item-name text-center">{item.name}</p>
            	</a>
            	<div>
            		<b className="item-price">Rs {item.price}</b>
            		<button className="cart-btn"
            		onClick={(e) => this.props.handleAddToCart(e , item)}>Add To Cart</button>
            	</div>
            	</div>
            </div>
        ));

		return (
			<div className="row">
				{foodItems}
			</div>
		)
	}
}