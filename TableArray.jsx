import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState }from 'react'

const TableArray = () => {
    var[names,setName]= useState([
        {sname:'Anjal',age:20},
        {sname:'Dhanush',age:20},
        {sname:'Aswin',age:20}
    ]);
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant='h2'>Table Array</Typography>  
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                </TableRow>
                <TableCell style={{color:'red'}}>Name</TableCell>
            </TableHead>
            <TableBody>
                {names.map((value,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{index}.{value.sname}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableArray