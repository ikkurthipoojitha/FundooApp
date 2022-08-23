import React, { useState } from "react";
// import './signin2.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userservice";
import { useNavigate } from 'react-router-dom';
import Signup from "../signup2/signup2";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

import Paper from '@mui/material/Paper';

const useStyle=makeStyles({
    maincontainer1:{
        width:'100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems:' center',
        alignContent:'center',
        justifyContent: 'center',
        /* align-content: 'center', */
        // border: '1px solid green', 
    },
    googletext1:{
        marginTop: '40px',
        width:'400px',
        height:'65%',
        display: 'flex',
        top:'22px',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'flex-start',
        //  border: '1px solid grey',
         boxShadow:'1px 1px 1px 1px grey',
        marginLeft:'400px',
        padding: '20px',
    },
    logotext1:{
        width:'100%',
        height:'10%',
        /* top:'20px', */
        display: 'flex',
        flexDirection: 'column',
        alignItems:' center',
        /* border: '1px solid violet', */
    
    },
    pid:{
        width:'100%',
        height:'10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        // border:'1px solid green',
        left:'200px',
        top:'10px',
    },
    // p:{
    //     textAlign: 'center',
    // },
    spanid:{
        fontWeight:'normal',
        fontSize: 'normal',
    },
    logo:{
        textAlign: 'center',
        top:'5px',
        // border:'1px solid red',
    },
    textbox1:{
        width:'100%',
        height:'65%',
        /* border: '1px solid blue', */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    Buttoncontainer1:{
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        /* border: 1px solid greenyellow, */
    },
    buttontext:{
        textTransform: 'capitalize',
        // objectFit:'fill',
    },
    
    ['@media only screen and (min-width :360px) and (max-width :480px)']: {
        googletext1:{
            width:'85%',
            height:'70%',
            marginLeft:'20px',
            marginTop:'0px',
            border:'none',
        },
        textbox1:{
            width:'85%',
        },
        Buttoncontainer1:{
            width: '85%',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        googletext1:{
            width:'70%',
            height:'auto',
            marginTop:'5px',
            marginLeft:'70px',
            border:'none',
        },
        textbox1:{
            width:'75%',
        },
        Buttoncontainer1:{
            width: '75%',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        googletext1:{
            width:'80%',
            height:'70%',
            marginLeft:'70px',
            /* border:'none', */
        },
        textbox1:{
            width:'85%',
        },
        Buttoncontainer1:{
            width: '85%',
        },
    },
})

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
    const classes = useStyle();
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState({ email: '', password: '' })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

    const takeUserName = (event) => {
        // setUserInput({
        //     email:event.target.value
        // })

        setUserInput(previousState => ({
            ...previousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        // setUserInput({
        //     password:event.target.value
        // })

        setUserInput(previousState => ({
            ...previousState,
            password: event.target.value
        }))
        console.log(event.target.value)

    }
    const submit = () => {
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)
        if (emailTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: true,
                emailHelper: "enter correct mail"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "enter correct password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(userInput)

        if (emailTest === true && passwordTest === true) {
            login(userInput).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.id)
                navigate('/Dashboard')
            })

            console.log("login successful")
        }
    }

    const newAccount = () => {
        navigate('/Signup')

    }

    return (
        <Box classNameName = {classes.maincontainer1}>
            <Card>
            <span className={classes.googletext1}>
                <Box className={classes.logotext1}>
                    <img className={classes.logo} width="90px" height="69px" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn3nDgQ7_LWaPb_0_KtiM0cnt23wanFv7_w&usqp=CAU"></img><br />
                </Box>
                <p className={classes.pid}><span className={classes.spanid}>Sign in<br /></span>
                    Use your google account</p>

                <Box className={classes.textbox1}>
                
                    <TextField id="outlined-basic" label="Email" size="medium" variant="outlined"
                        onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                    
                    <p style={{ color: "blue",textAlign:'left' }}>Forgot Email?</p>

                    <TextField id="outlined-basic" label="Password" size="medium" onChange={takePassword}
                        variant="outlined" error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
                    <p style={{ color: "blue",textAlign:'left' }}>Forgot Password?</p>
                </Box>
                <Box className={classes.Buttoncontainer1}>
                    <Button className={classes.buttontext} style={{ width: '19ch', height: '8ch' }} variant="text" size="small"
                        onClick={newAccount}
                    >Create Account</Button>
                    <Button className={classes.buttontext} style={{ width: '10ch', height: '6ch' }} size="small" variant="contained" onClick={submit}>Next</Button>
                </Box>
            </span>
            </Card>
        </Box>

    )
}

export default Signin
