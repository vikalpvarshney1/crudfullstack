import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import EditUser from './EditUser';
const Tablebar = () => {
  const [draweropen, setdraweropen] = React.useState(false)
  const Navigate = useNavigate()
  const [data, setdata] = useState([])
  const [mirnal, setmirnal] = useState("")
  const getdata = async () => {
    const res = await axios.get("http://localhost:8000/user")
    // console.log(res.data);
    setdata(res.data)
  }
  useEffect(() => {
    getdata();
  }, [])

  const handleDelete = async (e) => {
    console.log(e)
    await axios.delete(`http://localhost:8000/user/${e}`)
    getdata();

  }
  const handleEdit = (id) => {
    console.log(id);
    setmirnal(id)
    // Navigate(`/edit/${id}`)
  }

  return (
    <div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }} >

              <TableCell align="left" style={{ color: "white" }}>Country</TableCell>
              <TableCell align="left" style={{ color: "white" }}>FirstName</TableCell>
              <TableCell align="left" style={{ color: "white" }}>LastName</TableCell>
              <TableCell align="left" style={{ color: "white" }}>Email Address</TableCell>
              <TableCell align="left" style={{ color: "white" }}>Contact</TableCell>
              <TableCell align="left" style={{ color: "white" }}>Edit</TableCell>
              <TableCell align="left" style={{ color: "white" }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((index) => {
                return <TableRow key={index._id}>
                  <TableCell>{index.Country}</TableCell>
                  <TableCell align="left">{index.FirstName}</TableCell>
                  <TableCell align="left">{index.LastName}</TableCell>
                  <TableCell align="left">{index.Email}</TableCell>
                  <TableCell align="left">{index.Contact}</TableCell>
                  <TableCell align="left"> <EditUser index={index} draweropen={draweropen} setdraweropen={setdraweropen} />  </TableCell>
                  <TableCell align="left" onClick={() => handleDelete(index._id)}><DeleteIcon /> </TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tablebar