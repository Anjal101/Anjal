import { Typography ,TextField ,Button, } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("Class");
    const changeName = ()=>{
        console.log("Clicked");
        setPname("data")
    }
    const readValue = (e)=>{
        SVGMetadataElement(e.target.value);
        console.log("data")
    }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
        <Typography variant='h3'>Welcome {pname}</Typography>
        <br></br>
<Button variant="contained" onClick={changeName}>Change</Button>
<br></br>
<TextField label="Name" variant="outlined"onChange={readValue} />
    </div>
  )
}

export default StateBasics