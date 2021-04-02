import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }))

  // eslint-disable-next-line react/sort-comp
  increment = this.makeIncrementer(1)

  render() {
    return (
      <div>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <p>Count: {this.state.count}</p>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="increment" onClick={this.increment}>
          Increment count
          {/* Hi comment */}
        </button>
      </div>
    )
  }
}

export default App
