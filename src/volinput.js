import React from 'react';
import './simple.css'

type Props = {
  volume: Object,
}

var intRegex = '[0-9]+'

const VolInput = (props: Props) => (
  <input
    className='Input-Vol'
    type='number'
    disabled={true}
    pattern={intRegex}
    placeholder='V'
    value={props.volume}
  />
)

export default VolInput;
