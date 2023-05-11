import { TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const Eg2 = () => {
    var[val,setVal1] = useState({id:"",Age:""});
    const inputHandler = (e)=>{
        const{name,value} = e.target
  setVal1((val)=>({...val,[name]:value}))
    }

    return(
        <div>
            <br></br>
            <TextField label="id" name="id" value={val.id} onChange={inputHandler}></TextField>
            <br></br>
            
            <br></br>
            <TextField label="Age" name="age" value={val.id1} onChange={inputHandler}></TextField>
        <br></br>
        <br></br>
        <TextField label="Place" name="place" value={val.id2} onChange={inputHandler}></TextField>
        </div>
    )
}

export default Eg2