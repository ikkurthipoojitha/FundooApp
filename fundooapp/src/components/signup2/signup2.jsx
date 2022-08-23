import React, { useState } from "react";
// import './signup2.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sign } from "../../services/userservice";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle=makeStyles({
    maincontainerup:{
        width:'100vw',
        height: '120vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        /* border:' 1px solid green', */
    },
    googletext:{
        marginTop: '10px',
        /* marginLeft:'180px', */
        width:'650px',
        height:'500px',
        display: 'flex',
        /* top:'10px', */
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        /* border: '1px solid grey', */
        padding: '20px',
    },
    columncontainer:{
        width: '60%',
        height:' 95%',
        display: 'flex',
        left:'0',
        top:'0px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        /* border: '1px solid red', */
    },
    pup:{
        fontSize: 'medium',
        textAlign: 'left',
    },
    logoup:{
        textAlign: 'left',
    },
    columncontainer2:{
        width: '42%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        /* border: '1px solid red', */
    },
    columncontainer3:{
        width:'100%',
        height:'80%',
        /* border:'1px solid yellow', */
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px',
    },
    icon:{
        marginTop:'60px',
        /* border:'1px solid purple', */
    },
    icontext:{
        /* border:'1px solid green', */
        width:'100%',
        height:'20%',
        marginLeft:'20px',
        textAlign: 'center',
        /* paddingTop:'500px',
        paddingRight:'10px', */
    },
    logotext:{
        width:'100%',
        height:'8%',
        display: 'flex',
        top:'0px',
        left:'0px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        /* border: '1px solid violet', */
    },
    
    textboxcontainer:{
        width:'100%',
        height:'15%',
        /* border: '1px solid blue', */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    gapbox:{
        width:'2%',
        height:'auto',
    },
    textbox:{
        width:'100%',
        height:'25%',
        /* border: '1px solid pink', */
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
    },
    outlinedbasic:{
        width:'45%',
    
    },
    Buttoncontainer:{
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        /* border: 1px solid greenyellow, */
    },
    ['@media only screen and (min-width :360px) and (max-width :480px)']: {
        googletext:{
            marginTop: '5px',
            marginLeft:'0px',
            width:'300px',
            height:'auto',
            border:'none',
            /* border:'1px solid red', */
        },
        columncontainer:{
            width:'100%',
            /* padding: '20px', */
            border:'none',
        },
        columncontainer2:{
            display: 'none',
        },
        textboxcontainer:{
            height:'100px',
            display: 'flex',
            flexDirection: 'column',
        },
        textbox:{
            height: '150px',
        },
        outlinedbasic:{
            width:'100%',
            height:'40%',
            objectfit:'fill',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {

        googletext:{
            marginTop: '5px',
            width:'450px',
            height:'auto',
        },
        columncontainer:{
            width:'100%',
            padding: '20px',
            border:'none',
    
        },
        columncontainer2:{
            display: 'none',
        },
        textboxcontainer:{
            height:'110px',
            display: 'flex',
            flexDirection: 'column',
        },
        textbox:{
            height: '150px',
        },
        outlinedbasic:{
            width:'100%',
            height:'40%',
            objectFit:'fill',
        },
    
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {

        googletext:{
            marginTop: '5px',
            width:'450px',
            height:'auto',
        },
        columncontainer:{
            width:'100%',
            /* padding: '20px', */
            /* border:'1px solid grey', */
    
        },
        columncontainer2:{
            display: 'none',
        },
        textboxcontainer:{
            height:'100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        outlinedbasic:{
            width:'45%',
            objectFit:'fill',
        },
    }, 
    
})

function Signup() {
    const classes = useStyle();

    const [userDetails, setUserDetails] = useState({
        firstName: '', lastName: '', email: '', password: '', service: 'advance'
    })
    const [regexObject, setRegexObject] = useState({
        firstNameBorder: false, firstNameHelper: "",
        lastNameBorder: false, lastNameHelper: "",
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "",
    })
    const takeFirstName = (event) => {

        setUserDetails(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeLastName = (event) => {


        setUserDetails(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)

    }
    const takeUserName = (event) => {

        setUserDetails(previousState => ({
            ...previousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {


        setUserDetails(previousState => ({
            ...previousState,
            password: event.target.value
        }))
        console.log(event.target.value)

    }
    const submitEvent = () => {
        let emailTest = emailRegex.test(userDetails.email)
        let passwordTest = passwordRegex.test(userDetails.password)
        let firstNameTest = firstNameRegex.test(userDetails.firstName)
        let lastNameTest = lastNameRegex.test(userDetails.lastName)
        if (firstNameTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter correct first name"
            }))
        }
        else if (firstNameTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }
        if (lastNameTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter correct last name"
            }))
        }
        else if (lastNameTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }
        if (emailTest === false) {
            setRegexObject(previousState => ({
                ...previousState,
                emailBorder: true,
                emailHelper: "enter correct mail"
            }))
        }
        else if (emailTest === true) {
            setRegexObject(previousState => ({
                ...previousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRegexObject(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "enter correct password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObject(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }


        if (emailTest === true && passwordTest === true && firstNameTest === true && lastNameTest === true) {
            sign(userDetails).then((response) => { console.log(response) })
        }
        console.log("signup successful")

    }

    return (

        <Box className={classes.maincontainerup}>
            <Paper>
            <span className={classes.googletext}>
                <Box className={classes.columncontainer}>
                    <Box className={classes.logotext}>
                        <img className={classes.logoup} width="100px" height="79px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn3nDgQ7_LWaPb_0_KtiM0cnt23wanFv7_w&usqp=CAU"></img><br />
                    </Box>
                    <p className={classes.pup}>Create your google account</p>
                    <Box className={classes.textboxcontainer}>
                        <TextField className={classes.outlinedbasic} label="First Name"
                            variant="outlined" size="small" onChange={takeFirstName} error={regexObject.firstNameBorder} helperText={regexObject.firstNameHelper} />
                        <Box className={classes.gapbox}></Box>
                        <TextField className={classes.outlinedbasic} label="Last Name"
                            variant="outlined" size="small" onChange={takeLastName} error={regexObject.lastNameBorder} helperText={regexObject.lastNameHelper} />
                    </Box>
                    <Box className={classes.textbox}>
                        <TextField id="outlined-basic" label="Email" size="small" style={{width:'24 ch'}} variant="outlined"
                            onChange={takeUserName} error={regexObject.emailBorder} helperText={regexObject.emailHelper} />
                        <p style={{ color: 'blue',textAlign:'left' }}>Use my current email address instead</p>
                    </Box>
                    <Box className={classes.textboxcontainer}>
                        <TextField className={classes.outlinedbasic}
                            // style={{width:'22ch'}} 
                            label="Password" size="small" variant="outlined" onChange={takePassword} error={regexObject.passwordBorder} helperText={regexObject.passwordHelper} />
                        <div className={classes.gapbox}></div>
                        <TextField className={classes.outlinedbasic} value="advance" label="Service" size="small" variant="outlined" />

                    </Box>
                    <Box className={classes.Buttoncontainer}>
                        <Button variant="text" size="small">Sign in instead</Button>
                        <Button size="small" style={{ height: '5 ch' }} onClick={submitEvent} variant="contained">Next</Button>
                    </Box>
                </Box>
                <Box className={classes.columncontainer2}>
                    <Box className={classes.columncontainer3}>
                        <img className={classes.icon} width="95%" height="65%" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img>
                        <p className={classes.icontext}>One account. All of Google<br />
                            working for you</p>
                    </Box>
                </Box>


            </span>
        </Paper>

        </Box>
    )
}

export default Signup