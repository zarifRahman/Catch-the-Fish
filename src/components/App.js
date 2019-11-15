
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import samplefishes from '../sample-fishes';
import Fish from './Fish';
//import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  }

  ////firebase portion
  // componentDidMount() {
  //   const { params } = this.props.match;
  //   this.ref = base.syncState(`${params.storeId}/fishes`, {
  //     context: this,
  //     state: 'fishes'
  //   });
  // }

  updateFish = (key, updatedFish) => {
    //1. take a copy of current state
    const fishes = {...this.state.fishes };
    
    //2. Update that state
    fishes[key] = updatedFish;
    
    //3. Set that to state
    this.setState({
      fishes:fishes
    })
  }

  //{name: "zarif", price: 12, status: "available", desc: "ss", image: "as"}
  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes : samplefishes
    });
  };

  addToOrder = (fishes123) => {
    // console.log("from app",fishes123)
    // 1. take a copy of state
    const order = {...this.state.order};
    //2. either add to the  order, or update the number in the order
    order[fishes123] = order[fishes123] + 1 || 1;
    //3. call setState to update the state 
    this.setState({ order : order })
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">        
          <Header tagline="Fresh Seafood market" age={34} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fish =>
              <Fish 
                key={fish}
                index={fish}
                details={this.state.fishes[fish]}
                addToOrder = {this.addToOrder}
              />
            )}
          </ul>
        </div>

        <Order 
          fishes={this.state.fishes}
          order={this.state.order} 
        />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish = {this.updateFish}
        />
      </div>
    )
  }
}

export default App;