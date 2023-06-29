import { Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function BmiCalculator() {
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  // const [bmi, setBmi] = useState("")

  const calculateBmi = () => {
    let heightInMeters = height / 100; // converting cm to m
    let calculatedBMI = weight / Math.pow(heightInMeters, 2);
    return calculatedBMI.toFixed(2); // rounding off the decimal upto two places
  };

  const calculate = () => {
    if (!gender) return alert('Please select your gender')
    if (!parseInt(height)) return alert('Please input your height')
    if (!parseInt(weight)) return alert('Please input your weight')
    
    let result
    const bmi = calculateBmi()

    if (gender === 'male') {
      if (bmi <= 18.5) {
        result = 'Underweight'
      } else if (bmi >= 18.5 && bmi <= 25) {
        result = 'Normal weight'
      } else if (bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight'
      } else if (bmi >= 30 && bmi <= 34.9) {
        result = 'Severe overweight (obesity grade 1)'
      } else if (bmi >= 35 && bmi <= 39.9) {
        result = 'Obesity grade 2'
      } else if (bmi <= 40) {
        result = 'Obesity grade 3'
      } else {
        result = 'Unknown'
      }
    } else if (gender === 'female') {
      if (bmi <= 17.5) {
        result = 'Underweight'
      } else if (bmi >= 17.5 && bmi <= 24) {
        result = 'Normal weight'
      } else if (bmi >= 24 && bmi <= 29) {
        result = 'Overweight'
      } else if (bmi >= 29 && bmi <= 34) {
        result = 'Severe overweight (obesity grade 1)'
      } else if (bmi >= 34 && bmi <= 36.5) {
        result = 'Obesity grade 2'
      } else if (bmi <= 39) {
        result = 'Obesity grade 3'
      } else {
        result = 'Unknown'
      }
    } else {
      return alert('Please select your gender')
    }

    alert(`Your BMI is: ${bmi}. ${result}`)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: '60px' }}>
      {/* gender */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      {/* age */}
      <FormControl sx={{ marginTop: '16px' }}>
        <FormLabel sx={{ marginBottom: '4px' }}>Age</FormLabel>
        <TextField
          label="Age"
          type="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>

      {/* height */}
      <FormControl sx={{ marginTop: '16px' }}>
        <FormLabel sx={{ marginBottom: '4px' }}>Height</FormLabel>
        <OutlinedInput
          type="number"
          placeholder="Height"
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </FormControl>

      {/* weight */}
      <FormControl sx={{ marginTop: '16px' }}>
        <FormLabel sx={{ marginBottom: '4px' }}>Weight</FormLabel>
        <OutlinedInput
          type="number"
          placeholder="Weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </FormControl>

      <Button
        size="large"
        variant="contained"
        sx={{ mt: '20px' }}
        onClick={() => calculate()}>Calculate</Button>
    </Box>
  )
}
