import React , {Component} from 'react'
import '../App.css';

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props
        return (
            <div className="alert alert-info">
            <p className="text-center" style={{"fontSize" : "20px" , "fontWeight" : "bold"}}>Cart</p>
            {cartItems.length === 0 ? "Cart is Empty" : 
                <div className="text-center">
                    Your Items
                    <div className="cart-headers">
                        <p>Name</p>
                        <p>Qty</p>
                        <p>Price</p>
                        <p>Remove</p>
                    </div>
                </div>
            }
                {cartItems.length > 0 &&
                    <div>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.itemno} className="each-cart-item">
                                    <b style={{"width" : "70px"}}>{item.name}</b>
                                    <div className="qty">
                                    <i class="fa fa-minus" aria-hidden="true" 
                                    onClick={(e) => this.props.handleDecrement(e, item)}>
                                    </i>
                                    <b>{item.count}</b>
                                    <i class="fa fa-plus" aria-hidden="true"
                                    onClick={(e) => this.props.handleIncrement(e, item)}>
                                    </i>
                                    </div>
                                    <p style={{"marginLeft" : "40px"}}>{item.price * item.count}</p>
                                    <button style={{"fontSize" : "12px" , "marginLeft": "60px"}} className="btn btn-danger btn-xs"
                                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                    <br />
                                </li>))
                            }
                        </ul>
                        <div className="checkout">
                        <p>Total : {cartItems.reduce((a,c) => a + c.price * c.count , 0)}</p>
                        <button className="btn btn-primary" onClick={() => alert("Checkout is not implemented yet!")}>Checkout</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}