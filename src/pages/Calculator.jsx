import React from 'react'
import Header from '../components/Header'
import { Slider, Box } from  '@mui/material'


const marks = [
  {
    value: 500,
    label: '500',
  },
  {
    value: 5000,
    label: '5000',
  },
  {
    value: 50000,
    label: '50000',
  },
];

function valuetext(value) {
  return `${value}`;
}

const Calculator = () => {
  return (
    <div>
      <Header></Header>
      <div className="calculate-section">
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
      
        getAriaValueText={valuetext}

        marks={marks}
      />

      </Box>
      
      </div>
    </div>
  )
}

export default Calculator
