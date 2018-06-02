import React, { Component } from 'react';

class Simple extends Component {
  state = {
    dextroseConcentration: null,
    volume: null,
    volumeOfD70: 0,
    dextrose: 70,
    naclConcentation: null,
    volumeOfNACL234: 0,
  }

  handleDextroseConcentrationChange = (event) => {
    var dextroseConcentration = event.target.value
    var volumeOfD70 = (this.state.volume * dextroseConcentration)/this.state.dextrose
    this.setState({dextroseConcentration: dextroseConcentration, volumeOfD70: volumeOfD70.toFixed(2)})
  }
  handleNACLConcentrationChange = (event) => {
    var naclConcentation = event.target.value
    var volumeOfNACL234 = (this.state.volume * naclConcentation)/23.4
    this.setState({naclConcentation: naclConcentation, volumeOfNACL234: volumeOfNACL234.toFixed(2)})
  }
  handleVolumeChange = (event) => {
    var volume = event.target.value
    var volumeOfD70 = (volume * this.state.dextroseConcentration)/this.state.dextrose
    this.setState({volume: volume, volumeOfD70: volumeOfD70.toFixed(2)})
  }

  render() {
    return (
      <div>
        <div>
          <h3> Variable Dextrose using D70%</h3>
          <form>
            <input placeholder='Dextrose Concentation' value={this.state.dextroseConcentration} onChange={this.handleDextroseConcentrationChange} />
            (
            <input placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            )
            <span> = {this.state.volumeOfD70}</span>
          </form>
        </div>
        <div>
        <h3> Variable NaCl using 23.4%</h3>
          <form>
            <input placeholder='NaCl Concentation' value={this.state.naclConcentation} onChange={this.handleNACLConcentrationChange} />
            (
            <input placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            )
            <span> = {this.state.volumeOfNACL234}</span>
          </form>
        </div>
      </div>
    )
  }
}

export default Simple;
