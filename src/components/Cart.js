import React , {Component} from 'react'
import '../App.css';

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props
        return (
            <div>
            <p style={{"fontSize" : "30px" , "fontWeight" : "bold"}}>Cart</p>
            {cartItems.length === 0 ? "Cart is Empty" : 
                <p>
                    Your Items
                </p>
            }
                {cartItems.length > 0 &&
                    <div>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.itemno} className="each-cart-item">
                                    <b style={{"width" : "70px"}}>{item.name}</b>
                                    <div className="qty">
                                    <i className="fa fa-minus" aria-hidden="true" 
                                    onClick={(e) => this.props.handleDecrement(e, item)}>
                                    </i>
                                    <b>{item.count}</b>
                                    <i className="fa fa-plus" aria-hidden="true"
                                    onClick={(e) => this.props.handleIncrement(e, item)}>
                                    </i>
                                    </div>
                                    <p style={{'fontWeight' : '400'}}>Rs {item.price * item.count}</p>
                                    <br />
                                </li>))
                            }
                        </ul>
                        <p style={{'fontWeight' : '400'}}>Total : Rs {cartItems.reduce((a,c) => a + c.price * c.count , 0)}</p>
                        <button className="btn btn-primary" onClick={() => alert("Checkout is not implemented yet!")}>Checkout</button>
                    </div>
                }
            </div>
        )
    }
}