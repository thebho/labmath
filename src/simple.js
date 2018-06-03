import React, { Component } from 'react';
import './simple.css'

var decimalRegex = '[0-9]+([\.][0-9]+)?'
var intRegex = '[0-9]+'

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
    this.setState({sterileWaterVolume: sterileWaterVolume.toFixed(2)})
  }

  render() {
    return (
      <div className='labMathBody'>
        <div className='equation'>
          <div className='MathHeader'> Variable Dextrose using D70%</div>
          <div className='equation-body'>
            <form className='equation-left'>
              <input type='number' pattern={decimalRegex} placeholder='Dextrose Concentation' value={this.state.dextroseConcentration} onChange={this.handleDextroseConcentrationChange} />
              <div>
                (
                <input type='number' pattern={intRegex} placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
                )
              </div>
            </form>
            <div className='equation-right'>{this.state.volumeOfD70}</div>
          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'> Variable NaCl using 23.4%</div>
            <div className='equation-body'>
            <form className='equation-left'>
              <input type='number' pattern={decimalRegex} placeholder='NaCl Concentation' value={this.state.naclConcentation} onChange={this.handleNACLConcentrationChange} />
              <div>
                (
                <input type='number' pattern={intRegex}   placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
                )
              </div>
            </form>
            <div className='equation-right'>{this.state.volumeOfNACL234}</div>
          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'> Variable KCl using 2 mEq/mL</div>
          <div className='equation-body'>
            <form className='equation-left'>
              <input type='number' pattern={decimalRegex} placeholder='mEq Per Liter' value={this.state.mEqperLiter} onChange={this.handlemEqChange} />
              <div>
                (
                <input type='number' pattern={intRegex} placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
                )
              </div>
          </form>
          <div className='equation-right'> {this.state.mLPotassiumChl}</div>

          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'> Volume of Sterile Water</div>
          <div className='equation-body'>
            <div className='equation-left'>{this.state.volume ? this.state.volume : 'TV'} - {this.state.volumeOfD70} - {this.state.volumeOfNACL234} - {this.state.mLPotassiumChl}</div>
            <div className='equation-right'>{this.state.sterileWaterVolume}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Simple;
