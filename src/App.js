import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Discover from './components/Discover';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cuisines: '', 
      inputValue: '',
      items : [],
      filteredItems : [],
      cartItems : []
    };
    this.handleChangeCuisines = this.handleChangeCuisines.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  handleChangeCuisines(e) {
    this.setState({cuisines : e.target.value});
    console.log(this.state.cuisines)
    this.listItems();
  }
  

  handleInput(e) {
    this.setState({inputValue : e.target.value});
    this.listItems();
  }

  listItems() {
    this.setState(state => {
    if(state.inputValue !== '') {
      return {filteredItems : state.items.filter(b => 
        b.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) 
      )}
    }
    
    if(state.cuisines !=='') {
      return { filteredItems : state.items.filter(a =>
        a.cuisines.indexOf(state.cuisines) >=0
      )}
    }

    if(state.inputValue !== '') {
      return {filteredItems : state.items.filter(b => 
        b.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) 
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
    <div className="container-fluid">
      <div className="row">
        <Navbar/>
        <Carousel />
        <Discover />
        <h2 className="col-md-12 text-center">Featured Menu</h2>
        <p className="col-md-12 text-center">Taste the best of our elaborate spread that has been our customer’s favorite made with only the best and the freshest ingredients.</p>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-8">
              <hr/>
              <Filter handleChangeCuisines={this.handleChangeCuisines}
                      handleInput = {this.handleInput}/>
              <Items  handleChangeCuisines={this.handleChangeCuisines}
                      cuisines={this.state.cuisines}
                      count={this.state.filteredItems.length} 
                      items={this.state.filteredItems} 
                      handleAddToCart={this.handleAddToCart} 
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
        <Footer />
      </div>
    </div>
  );
}
}

export default App;
