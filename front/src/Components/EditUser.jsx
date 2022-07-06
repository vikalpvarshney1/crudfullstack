
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Drawer, FilledInput, FormControl, FormLabel, Grid, InputLabel, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
const EditUser = ({ draweropen, setdraweropen, index }) => {
    // console.log(index);
    const [user, setuser] = useState({
        FirstName: index.FirstName,
        LastName: index.LastName,
        Email: index.Email,
        Contact: index.Contact,
        Country: index.Country
    })

   
    useEffect(() => {
        getdata()
    }, [])

    const { FirstName, LastName, Email, Contact, Country } = user
    // console.log("user:", user);
    // console.log(mirnal);
    const getdata = async () => {
        // const res = await axios.get(`http://localhost:8000/user/${_id}`)
        // setuser(res.data)
        // console.log(res.data);
    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {

        if (FirstName.length == 0 && LastName.length == 0 && Email.length == 0 && Contact.length == 0 && Country.length == 0) {
            alert('enter details')
        }
        else if (FirstName.length == 0) {
            alert('enter First name')
        }
        else if (LastName.length == 0) {
            alert('enter Last name')
        }
        else if (Email.length == 0) {
            alert('enter Email name')
        }
        else if (Contact.length == 0) {
            alert('enter Contact name')
        }
        else if (Country.length == 0) {
            alert('enter Country name')
        }

        // e.preventDefault();
        else {
            // await axios.put(`http://localhost:8000/user/${_id}`)

        }
        setdraweropen(false)
    }

    return (
        <>
            <EditIcon onClick={() => setdraweropen(true)} />
            <Drawer
                anchor='right'
                open={draweropen}
                onClose={() => setdraweropen(false)}

            >
                <CancelIcon style={{ color: "red" }} onClick={() => setdraweropen(false)} />
                <Box p={2} width="450px" role="presentation">
                    <Typography variant="h5" textAlign="center">Edit Form</Typography>
                    <FormControl style={{ marginTop: "10px" }} >

                        <Grid container>
                            <Grid item xs={5} sx={{
                                marginRight: "37px",
                                marginLeft: "20px",

                            }}>
                                First Name
                                <TextField
                                    //required
                                    variant='outlined'
                                    name='FirstName'
                                    value={FirstName}
                                    onChange={(e) => onInputChange(e)}

                                />

                            </Grid>
                            <Grid item xs={5}>


                                Last Name:

                                <TextField
                                    required
                                    // defaultValue={defaultUser.LastName}
                                    variant='outlined'
                                    name='LastName'
                                    value={LastName}

                                    onChange={(e) => onInputChange(e)}
                                />

                            </Grid>
                        </Grid>

                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled" style={{ marginTop: "15px" }} >
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "10px", marginRight: "20px" }}>
                            <div>
                                Primary Email Address:
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <TextField
                                    required
                                    fullWidth
                                    // defaultValue={defaultUser.Email}
                                    variant='outlined'
                                    name='Email'
                                    value={Email}

                                    onChange={(e) => onInputChange(e)}

                                />
                            </div>
                        </div>

                    </FormControl>
                    <FormControl style={{ marginTop: "15px" }} >

                        <Grid container>
                            <Grid item xs={5} sx={{
                                marginRight: "37px",
                                marginLeft: "20px",

                            }}>

                                Contact Number:

                                <TextField
                                    required
                                    variant='outlined'
                                    // defaultValue={Contact}
                                    name='Contact'
                                    value={Contact}

                                    onChange={(e) => onInputChange(e)}
                                />

                            </Grid>
                            <Grid item xs={5}>
                                Country:

                                <TextField
                                    required
                                    variant='outlined'
                                    name='Country'
                                    value={Country}
                                    // defaultValue={Country}
                                    onChange={(e) => onInputChange(e)}
                                />

                            </Grid>
                        </Grid>
                        <br />
                    </FormControl>
                    <FormControl style={{ marginLeft: "20px" }} onClose={() => setdraweropen(false)}>
                        <Button variant="contained" onClick={e => onSubmit(e)}  >ADD</Button>
                    </FormControl>

                </Box>
            </Drawer>
        </>
    )
}

export default EditUser