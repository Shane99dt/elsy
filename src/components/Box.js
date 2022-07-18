import React from "react"

class Box extends React.Component {
  render() {
    const isWater = this.props.icon !== "local_drink"
    // const stepsCheck = this.props.icon === "direction_walk"
    return (
      <div className="box col-sm-3 col-6">
        <span style={{ color: this.props.color, fontSize:100}} className={this.props.imgClasses}>{this.props.icon}</span>
        <p>
          {this.props.value}{this.props.unit}
        </p>
        {isWater &&
          <input
            id={this.props.rangeId}
            type='range'
            className="rangeInput"
            name={this.props.rangeName}
            min={this.props.minRange}
            max={this.props.maxRange}
            value={this.props.value}
            onChange={this.props.getRange}
            step={this.props.icon === "directions_walk" ? 1000 : 1}>
            </input>
        }
        {/* {stepsCheck &&
          <input
            id={this.props.rangeId}
            type='range'
            className="rangeInput"
            name={this.props.rangeName}
            min={this.props.minRange}
            max={this.props.maxRange}
            value={this.props.value}
            onChange={this.props.getRange}>
          </input>
        } */}
      </div>
    )
  }
}

export default Box