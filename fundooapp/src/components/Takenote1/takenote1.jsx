import React from "react";
import './takenote1.css';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

const useStyle=makeStyles({

    container:{
        width: '100vw',
        height: '20vh',
        display: 'flex',
        flexDirection: 'row',
        /* border:'1px solid red', */
    
    },
    takenotecontainer:{
        width:'100%',
        height:'100%',
        position: 'relative',
        /* left: '480px', */
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        /* border: '1px solid grey', */
        borderradius: '15px',
    },
    Paperclass:{
        position:'relative',
        border: '1px solid grey',
        boxShadow: '1px 1px 1px 1px grey',
        left:'480px',
        width:'40%',
        height:'40%',   
     },
    
    pidnote:{
        width:'63%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        /* margin-left:'10px', */
        /* border:'1px solid violet', */
        textAlign: 'left',
    },
    cardicon:{
        width:'32%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        /* border: '1px solid blue', */
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        takenotecontainer:{
            width:'300px',
            height:'auto',
            left:'0px',
            position: 'relative',
            zIndex:'2',
        },
        pidnote:{
            width:'100%',
        },
        Paperclass:{
            position:'relative',
            zIndex:'1',
            left:'65px',
            width:'310px',
            boxShadow: '1px 1px 1px 1px grey',
            height:'30%',
        },
        
        cardicon:{
            width:'50%',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        takenotecontainer:{
            width:'380px',
            height:'auto',
            left:'0px',
            position: 'relative',
            zIndex:'2',
        },
        pidnote:{
            width:'100%',
        },
        Paperclass:{
            position:'relative',
            zIndex:'1',
            left:'85px',
            width:'390px',
            /* border: '1px solid green', */
            boxShadow: '1px 1px 1px 1px grey',
            height:'30%',
        },
        cardicon:{
            width:'45%',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        takenotecontainer:{
            width:'500px',
            height:'auto',
            left:'0px',
            position: 'relative',
            zIndex:'2',
        },
        pidnote:{
            width:'100%',
        },
        Paperclass:{
            position:'relative',
            zIndex:'1',
            left:'75px',
            width:'520px',
            /* border: '1px solid green', */
            boxShadow: '1px 1px 1px 1px grey',
            height:'30%',
        },
        cardicon:{
            width:'45%',
        },
    },
})

function TakeNoteOne(props){
    const classes = useStyle();

    const openTakeNoteTwo = () =>{
        props.listenToTakeNoteOne()
    }

    return(
        <div onClick={openTakeNoteTwo}>
            <div className={classes.container}>
            {/* <Paper> */}
            <Paper elevation = {3} className={classes.Paperclass} >
                <div className={classes.takenotecontainer}>
                    
                    <div className={classes.pidnote}> Take a note</div>
                    {/* <CheckBoxIcon fontSize="small" id="checkboxicon" />
                    < BrushIcon fontSize="small" id="brushicon"/>
                    <InsertPhotoIcon fontSize="small" id="photoicon"  />
                 */}
                <div className={classes.cardicon}>
                    <CheckBoxIcon fontSize="small" id="checkboxicon" />
                    < BrushIcon fontSize="small" id="brushicon"/>
                    <InsertPhotoIcon fontSize="small" id="photoicon"  />
                </div>
                </div>
                </Paper>

                {/* </Paper> */}
                </div>
            </div>
    )
}
export default TakeNoteOne