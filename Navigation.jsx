import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >TrialApp</Typography>
                <Button ><Link to="/" style={{color:"white"}}>LOG IN</Link></Button>
                <Button ><Link to="/TABLE" style={{color:"white"}}>Table</Link></Button>
                <Button ><Link to="/View" style={{color:"white"}}>View</Link></Button>
            </Toolbar>
        </AppBar>
       
    </div>
  )
}

export default Navigation