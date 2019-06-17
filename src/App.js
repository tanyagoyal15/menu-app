import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';
import Filter from './components/Filter';
import Cart from './components/Cart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: '', 
      location: '',
      items : [],
      filteredItems : [],
      cartItems : []
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    fetch("https://demo8785565.mockable.io/items")
    .then(res => res.json())
    .then(res => this.setState({
      items : res.items,
      filteredItems: res.items
    }))
    if(localStorage.getItem('cartItems')) {
      this.setState({cartItems : JSON.parse(localStorage.getItem('cartItems'))});
    }
  }

  handleChangeLocation(e) {
    this.setState({location : e.target.value});
    this.listItems();
  }

  handleChangeType(e) {
    this.setState({type : e.target.value});
    this.listItems();
  }
  
  listItems() {
    this.setState(state => {

    if(state.type!=='' && state.location!=='' ) {
      return { filteredItems : state.items.filter(a =>
        a.type.indexOf(state.type) >=0  && a.location.indexOf(state.location.toUpperCase())>=0
        )}
    }

    if(state.location!=='' && state.type!=='') {
      return { filteredItems : state.items.filter(b => 
        b.location.indexOf(state.location.toUpperCase())>=0 && b.type.indexOf(state.type) >=0 
      )}
    }
      return { filteredItems: state.items }
    })
  }

  handleAddToCart(e, item) {
    this.setState(state=> {
      const cartItems = state.cartItems;
      let itemAlreadyInCart = false;
      cartItems.forEach(ci => {
        if(ci.itemno === item.itemno) {
          ci.count += 1;
          itemAlreadyInCart = true;
        }
      });
      if(!itemAlreadyInCart) {
        cartItems.push({...item , count : 1})
      }
      localStorage.setItem("cartItems" ,JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.itemno !== item.itemno);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleDecrement(e, item){
    let tempCart = [...this.state.cartItems];
    const selectedItem = tempCart.find(ci => ci.itemno === item.itemno);

    const index = tempCart.indexOf(selectedItem);
    const ci = tempCart[index];

    ci.count = ci.count - 1;
    if(item.count === 0) {
      this.handleRemoveFromCart(e,item);
    }
    else {
      ci.total = ci.count * ci.price;
      this.setState(
      () => {
      return {cartItems: [...tempCart]}
    }, 
    );
    }
  }

handleIncrement(e, item){
    let tempCart = [...this.state.cartItems];
    const selectedItem = tempCart.find(ci => ci.itemno === item.itemno);

    const index = tempCart.indexOf(selectedItem);
    const ci = tempCart[index];

    ci.count = ci.count + 1;
    if(item.count === 0) {
      this.handleRemoveFromCart(e,item);
    }
    else {
      ci.total = ci.count * ci.price;
      this.setState(
      () => {
      return {cartItems: [...tempCart]}
    }, 
    );
    }
  }

  render() {
  return (
    <div className="container-fluid mx-20">
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-center">Food Menu</h1>
          <Filter count={this.state.filteredItems.length}
                  handleChangeType={this.handleChangeType} 
                  handleChangeLocation={this.handleChangeLocation} />
          <hr/>
          <Items items={this.state.filteredItems} handleAddToCart={this.handleAddToCart} 
          />
        </div>
        <div className="col-md-4 cart">
        <hr style={{"margin " : "0"}}/>
          <Cart 
            cartItems={this.state.cartItems} 
            handleRemoveFromCart={this.handleRemoveFromCart}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
