import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    // console.log('ss',this.props.index);
    this.props.addToOrder(this.props.index);
  }

  render(){
    console.log("map value",this.props.index)
    const {name, image, price, desc, status} = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img 
          src={image} 
          alt={name}
        />

        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        
        <p>{desc}</p>
        
        <button 
          disabled={!isAvailable}
          onClick={this.handleClick}
        >
          {isAvailable ? "Add to Order" : "Sold Out!"}
        </button>
      </li>
    )
  }
}

export default Fish;