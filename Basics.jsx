import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div><h1>Anjal Saju</h1>
    <input type='name'placeholder='name'/>
    <Typography variant='h1'color="violet">Anjal Saju</Typography>
    <br></br>
    <TextField label='name' variant='standard'></TextField>
    <br></br>
    <br></br>
    <TextField label='place' varient='original'></TextField>
    <br></br>
    <br></br>
    <Button variant="contained" color='error'>Text </Button>
    <br></br>
<Button variant="contained" color='success'>Contained </Button>
<Button variant="outlined" color='secondary'>Outlined</Button>
    </div>
  )
}

export default Basics