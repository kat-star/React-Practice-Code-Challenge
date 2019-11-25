import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    renderedSushi: [],
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
        this.renderFourSushi(allSushi)
      })
  }

  //array to render only 4 pieces of sushi at a time. Sets the state for both rendered sushi and last position
  renderFourSushi = (sushiList) => {
    this.setState((prevState) => {
      return {renderedSushi: sushiList.slice(prevState.lastPosition, prevState.lastPosition + 4)}
    });
    this.setState((prevState => {
      return {lastPosition: prevState.lastPosition + 4}
    })
    )
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

    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} renderedSushi={this.state.renderedSushi} handleSushiEaten={this.handleSushiEaten} renderFourSushi={this.renderFourSushi} />
        <Table eatenSushi={this.state.eaten} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;