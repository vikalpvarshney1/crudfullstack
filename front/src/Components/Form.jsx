
import React, { useState } from 'react'
import axios from "axios"
import { Box, Button, Drawer, FilledInput, FormControl, FormLabel, Grid, InputLabel, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
const Form = ({ draweropen, setdraweropen }) => {
    const [user, setuser] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Contact: "",
        Country: "",
    })
    const { FirstName, LastName, Email, Contact, Country } = user
    const onInputChange = (e) => {
        console.log(e.target.value);
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {

        if (FirstName.length == 0 && LastName.length==0 && Email.length==0 && Contact.length==0 && Country.length==0) {
            alert('enter details')
        }
        else if (FirstName.length == 0) {
            alert('enter First name')
        }
        else if (LastName.length == 0){
            alert('enter Last name')
        }
        else if (Email.length == 0){
            alert('enter Email name')
        }
        else if (Contact.length == 0) {
            alert('enter Contact name')
        }
        else if (Country.length == 0) {
            alert('enter Country name')
        }
       
        // e.preventDefault();
        else{
        await axios.post("http://localhost:8000/user", user)
        
    }
        setdraweropen(false)
    }

    return (
        <>
            <Drawer
                anchor='right'
                open={draweropen}
                onClose={() => setdraweropen(false)}

            >
                <CancelIcon style={{ color: "red" }} onClick={() => setdraweropen(false)} />
                <Box p={2} width="450px" role="presentation">
                    <Typography variant="h5" textAlign="center">Form</Typography>
                    <FormControl style={{ marginTop: "10px" }} >

                        <Grid container>
                            <Grid item xs={5} sx={{
                                marginRight: "37px",
                                marginLeft: "20px",

                            }}>

                                First Name

                                <TextField
                                    required
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

                                    onChange={(e) => onInputChange(e)}
                                />

                            </Grid>
                        </Grid>
                        <br />
                    </FormControl>
                    <FormControl style={{ marginLeft: "20px" }} >
                        <Button variant="contained" onClick={e => onSubmit(e)}  >ADD</Button>
                    </FormControl>

                </Box>
            </Drawer>
        </>
    )
}

export default Form