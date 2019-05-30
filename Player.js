
//jshint esversion: 6

import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.oneClick = this.oneClick.bind(this)
        this.minusClick = this.minusClick.bind(this)

    }


    oneClick() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }


    })

  }

minusClick() {
  this.setState(prevState => {
    return {
      count: prevState.count - 1
    }


})

}
    render() {
        return (
            <div>
                <h1> Player 2 </h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.oneClick}>+1</button>
                <button onClick={this.minusClick}>-1</button>



            </div>
        )
    }
}

export default App
