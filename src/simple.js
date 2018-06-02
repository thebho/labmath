import React, { Component } from 'react';
import './simple.css'

class Simple extends Component {
  state = {
    dextroseConcentration: '',
    volume: '',
    volumeOfD70: 0,
    dextrose: 70,
    naclConcentation: '',
    volumeOfNACL234: 0,
    mEqperLiter: '',
    mLPotassiumChl: 0,
    sterileWaterVolume: 0,
  }

  handleDextroseConcentrationChange = (event) => {
    var dextroseConcentration = event.target.value
    var volumeOfD70 = (this.state.volume * dextroseConcentration)/this.state.dextrose
    this.setState({dextroseConcentration: dextroseConcentration, volumeOfD70: volumeOfD70.toFixed(2)}, () => this.sterileWaterCalculation())

  }
  handleNACLConcentrationChange = (event) => {
    var naclConcentation = event.target.value
    var volumeOfNACL234 = (this.state.volume * naclConcentation)/23.4
    this.setState({naclConcentation: naclConcentation, volumeOfNACL234: volumeOfNACL234.toFixed(2)}, () => this.sterileWaterCalculation())

  }
  handleVolumeChange = (event) => {
    var volume = event.target.value
    var volumeOfD70 = (volume * this.state.dextroseConcentration)/this.state.dextrose
    this.setState({volume: volume, volumeOfD70: volumeOfD70.toFixed(2)}, ()  => this.sterileWaterCalculation())
  }
  handlemEqChange = (event) => {
    var meq = event.target.value
    var mLPotassiumChl = (meq * this.state.volume) / 2000
    this.setState({mEqperLiter: meq, mLPotassiumChl: mLPotassiumChl}, () => this.sterileWaterCalculation())
  }

  sterileWaterCalculation = () => {
    var sterileWaterVolume = this.state.volume - this.state.volumeOfD70 - this.state.volumeOfNACL234 - this.state.mLPotassiumChl
    this.setState({sterileWaterVolume: sterileWaterVolume})
  }

  render() {
    return (
      <div>
        <div>
          <div className='MathHeader'> Variable Dextrose using D70%</div>
          <form>
            <input type='number' placeholder='Dextrose Concentation' value={this.state.dextroseConcentration} onChange={this.handleDextroseConcentrationChange} />
            (
            <input type='number' placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            )
            <span> = {this.state.volumeOfD70}</span>
          </form>
        </div>
        <div>
        <div className='MathHeader'> Variable NaCl using 23.4%</div>
          <form>
            <input type='number' placeholder='NaCl Concentation' value={this.state.naclConcentation} onChange={this.handleNACLConcentrationChange} />
            (
            <input type='number' placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            )
            <span> = {this.state.volumeOfNACL234}</span>
          </form>
        </div>
        <div>
        <div className='MathHeader'> Variable KCl using 2 mEq/mL</div>
          <form>
            <input type='number' placeholder='mEq Per Liter' value={this.state.mEqperLiter} onChange={this.handlemEqChange} />
            (
            <input type='number' placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            )
            <span> = {this.state.mLPotassiumChl}</span>
          </form>
        </div>
        <div>
        <div className='MathHeader'> Volume of Sterile Water</div>
          <span><span className='Calcs'>{this.state.volume ? this.state.volume : 'TV'} - {this.state.volumeOfD70} - {this.state.volumeOfNACL234} - {this.state.mLPotassiumChl}</span> = {this.state.sterileWaterVolume}</span>
        </div>
      </div>
    )
  }
}

export default Simple;
