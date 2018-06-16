import React, { Component } from 'react';
import VolInput from './volinput';
import './simple.css'

var decimalRegex = '[0-9]+([\.][0-9]+)?'
var intRegex = '[0-9]+'



class Simple extends Component {
  state = {
    dextroseConcentration: '',
    volume: '',
    d70Total: 0,
    dextrose: 70,
    naclConcentation: '',
    volumeOfNACL234: 0,
    mEqperLiter: '',
    mLPotassiumChl: 0,
    sterileWaterVolume: 0,
    heparinnUnitsPerLiter: '',
    heparinTotal: 0,
  }

  handleDextroseConcentrationChange = (event) => {
    var dextroseConcentration = event.target.value
    this.setState({dextroseConcentration: dextroseConcentration},
      () => this.sterileWaterCalculation()
    )
  }
  handleNACLConcentrationChange = (event) => {
    var naclConcentation = event.target.value
    this.setState({naclConcentation: naclConcentation},
       () => this.sterileWaterCalculation()
     )

  }
  handleVolumeChange = (event) => {
    var volume = event.target.value
    this.setState({volume: volume},
      ()  => this.sterileWaterCalculation()
    )
  }
  handlemEqChange = (event) => {
    var meq = event.target.value
    this.setState({mEqperLiter: meq},
      () => this.sterileWaterCalculation()
    )
  }

  handleHerapinChange = (event) => {
    var heparinUnits = event.target.value
    this.setState({heparinnUnitsPerLiter: heparinUnits},
      () => this.sterileWaterCalculation()
    )
  }

  sterileWaterCalculation = () => {
    var d70Total = ((this.state.volume * this.state.dextroseConcentration)/this.state.dextrose).toFixed(2)
    var volumeOfNACL234 = ((this.state.volume * this.state.naclConcentation)/23.4).toFixed(2)
    var mLPotassiumChl = (this.state.mEqperLiter * this.state.volume) / 2000
    var heparinTotal = (this.state.heparinnUnitsPerLiter * this.state.volume) / 100000
    var sterileWaterVolume = (this.state.volume - d70Total - volumeOfNACL234 - mLPotassiumChl - heparinTotal).toFixed(2)
    this.setState({
      d70Total: d70Total,
      volumeOfNACL234:volumeOfNACL234,
      mLPotassiumChl: mLPotassiumChl,
      heparinTotal: heparinTotal,
      sterileWaterVolume: sterileWaterVolume,
    })
  }

  render() {
    return (
      <div className='labMathBody'>
        <div className='equation'>
          <div className='MathHeader'>Total Volume</div>
          <div className='equation-body'>
            <form className='equation-left'>
                <input type='number' pattern={intRegex} placeholder='Total Volume' value={this.state.volume} onChange={this.handleVolumeChange} />
            </form>
          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'>Dextrose (using 70%)</div>
          <div className='equation-body'>
            <form className='equation-left'>
              <input
                type='number' pattern={decimalRegex} placeholder='Concentration %' value={this.state.dextroseConcentration} onChange={this.handleDextroseConcentrationChange} />
              <div>
              (<VolInput volume={this.state.volume} />)

              </div>
            </form>
            <div className='equation-right'>{this.state.d70Total}</div>
          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'>Sodium Chloride (using 23.4%)</div>
            <div className='equation-body'>
            <form className='equation-left'>
              <input
                type='number' pattern={decimalRegex}
                placeholder='NaCL %' value={this.state.naclConcentation} onChange={this.handleNACLConcentrationChange} />
              <div>
              (<VolInput volume={this.state.volume} />)

              </div>
            </form>
            <div className='equation-right'>{this.state.volumeOfNACL234}</div>
          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'>Potassium Chloride (using 2 mEq/mL)</div>
          <div className='equation-body'>
            <form className='equation-left'>
              <input type='number' pattern={decimalRegex} placeholder='mEq Per Liter' value={this.state.mEqperLiter} onChange={this.handlemEqChange} />
              <div>
                (<VolInput volume={this.state.volume} />)
              </div>
          </form>
          <div className='equation-right'> {this.state.mLPotassiumChl}</div>

          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'>Heparin (using 100 unit/mL)</div>
          <div className='equation-body'>
            <form className='equation-left'>
              <input
                type='number' pattern={decimalRegex}
                placeholder='Units per Liter'
                value={this.state.heparinnUnitsPerLiter}
                onChange={this.handleHerapinChange} />
              <div>
              (<VolInput volume={this.state.volume} />)
              </div>
          </form>
          <div className='equation-right'> {this.state.heparinTotal}</div>

          </div>
        </div>
        <div className='equation'>
          <div className='MathHeader'> Volume of Sterile Water</div>
          <div className='equation-body'>
            <div className='equation-left'>{this.state.volume ? this.state.volume : 'TV'} - {this.state.d70Total} - {this.state.volumeOfNACL234} - {this.state.mLPotassiumChl} - {this.state.heparinTotal}</div>
            <div className='equation-right'>{this.state.sterileWaterVolume}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Simple;
