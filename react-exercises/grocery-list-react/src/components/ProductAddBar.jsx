import React from 'react';

class ProductAddBar extends React.Component {
  render() {
    return (
      <div className="productadbar">
        <form onSubmit={this.props.onSubmit}>
          <div className="input-form">
            <input
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.props.onChange}
              placeholder="Enter the product name"
            />
            <button>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductAddBar;
