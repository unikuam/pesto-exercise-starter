import React from 'react';
import Product from './Product';

class ProductsList extends React.Component {
  render() {
    console.log('list.js', this.props);
    return (
      <div>
        {this.props.products.map(product => <Product key={product.id}
          product={product}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onProductClick={this.props.onProductClick}
         />)}
      </div>
    );
  }
}

export default ProductsList;
