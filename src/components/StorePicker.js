
import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    
  }

  //see 11
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value; // quaint-plain-syllabuses
    this.props.history.push(`/store/${storeName}`) 
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>PLEASE ENTER A STORE</h2>
        <input 
          type="text"
          ref={this.myInput}
          required 
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;