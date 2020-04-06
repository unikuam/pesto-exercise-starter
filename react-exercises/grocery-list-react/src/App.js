import React from 'react';
import ProductAddBar from './components/ProductAddBar';
import ProductsList from './components/ProductsList';
import './App.css';

const DefaultProductColor = 'black';
const PurchasedProductColor = 'red';
class App extends React.Component
{
  state = {
    newProductData: {
      id: 0,
      name: '',
      quantity: 1,
      color: DefaultProductColor
    },
    products : [
      {
        id: '1',
        name: 'Ear Phones',
        quantity: 2,
        color: DefaultProductColor
      },
      {
        id: '2',
        name: 'Bluetooth Speakers',
        quantity: 5,
        color: DefaultProductColor
      }
    ]
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    let newProductDataClone = Object.assign({}, this.state.newProductData);
    newProductDataClone[name] = value;
    newProductDataClone.id = this.state.products.length + 1;
    newProductDataClone.quantity = 1;
    this.setState({ newProductData : newProductDataClone});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateProductField()) return false;
    const currentStateClone = this.processAddUpdateOnProduct();
    console.log(currentStateClone);
    this.setState({ currentStateClone });
  }

  validateProductField = () => {
    if (this.state.newProductData.name == '') {
      alert('Please enter a product name.');
      return false;
    }
    return true;
  }

  processAddUpdateOnProduct = () => {
    const currentStateClone = Object.assign({}, this.state);
    let similarProductData = currentStateClone.products.find((product) => {
      if (typeof product !== "undefined") {
        return currentStateClone.newProductData.name == product.name
      }
    });
    if (similarProductData !== undefined) {
      let updatedQtyProductArray = currentStateClone.products.map((product) => {
          if (product.id == similarProductData.id) {
            product.quantity++;
          }
          return product;
      });
      currentStateClone.products = updatedQtyProductArray;
    } else {
      currentStateClone.products.push(currentStateClone.newProductData);
    }
    return currentStateClone;
  }

  handleIncrement = (product) => {
    const currentStateClone = Object.assign({}, this.state);
    const index = currentStateClone.products.indexOf(product);
    currentStateClone.products[index].quantity++;
    this.setState({currentStateClone});
  }

  handleDecrement = (product) => {
    const currentStateClone = Object.assign({}, this.state);
    const index = currentStateClone.products.indexOf(product);
    currentStateClone.products[index].quantity--;
    if (currentStateClone.products[index].quantity <= 0) {
      delete currentStateClone.products[index];
    }
    this.setState({currentStateClone});
  }

  handleClear = () => {
    const currentStateClone = Object.assign({}, this.state);
    currentStateClone.products = [];
    // console.log(currentStateClone); //printing with products key
    this.setState({ currentStateClone });
    console.log(this.state); //but products key still exists
  }

  handleProductClick = (product) => {
    const currentStateClone = Object.assign({}, this.state);
    const index = currentStateClone.products.indexOf(product);
    currentStateClone.products[index].color = PurchasedProductColor;
    console.log(currentStateClone);
    this.setState({currentStateClone});
  }

  render() {
    console.log('app.js');
    return (
      <React.Fragment>
        <div className="container">
          <ProductAddBar
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            product={this.state.newProductData}
          />
          <ProductsList
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onProductClick={this.handleProductClick}
          />
          <button onClick={this.handleClear}>Clear All</button>
        </div>
      </React.Fragment>
    );
  }
}

// function ClearAll(props) {
//    return (
//      <button onClick={props.onClear}>Clear All</button>
//    );
// }

export default App;
