import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    lastPosition: 0,
    eaten: [],
    wallet: 50
  }

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(allSushi => {
        this.setState({
          sushiList: allSushi
        });
      })
  }

  moreSushi = () => {
    this.setState((prevState) => {
      return {lastPosition: prevState.lastPosition + 4}
    })
  }

  componentDidMount() {
    this.fetchSushi();
  }

  //function to handle sushi clicked on/eaten and wallet state. Passed into SushiContainer
  handleSushiEaten = (sushi) => {
    this.setState((prevState) => {
      if (prevState.wallet - sushi.price < 0) {
        alert("You don't have enough money")
      } else {
        return { 
          eaten: prevState.eaten.concat(sushi), 
          wallet: prevState.wallet - sushi.price
        }
      }
    }) 
  }

  render() {

    const fourSushi = this.state.sushiList.slice(this.state.lastPosition, this.state.lastPosition + 4)

    return (
      <div className="app">
        <SushiContainer handleSushiEaten={this.handleSushiEaten} sushi={fourSushi} moreSushi={this.moreSushi} />
        <Table eatenSushi={this.state.eaten} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;