import React from 'react';

class Product extends React.Component {
  render() {
    const { name : productName, quantity } = this.props.product;
    const styles = {
      color: this.props.product.color
    }
    console.log(styles);
    return (
      <div>
        <span onClick={() => this.props.onProductClick(this.props.product)} style={this.styles}>{productName}</span>
        <span>{quantity}</span>
        <button onClick={() => this.props.onIncrement(this.props.product)}>+</button>
        <button onClick={() => this.props.onDecrement(this.props.product)}>-</button>
      </div>
    );
  }
}

export default Product;
