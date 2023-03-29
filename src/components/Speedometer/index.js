import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="speed-title">Speed is {speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="accelerate-btn"
              type="button"
              onClick={this.onClickAccelerate}
            >
              Accelerate
            </button>
            <button
              className="brake-btn"
              type="button"
              onClick={this.onClickBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
