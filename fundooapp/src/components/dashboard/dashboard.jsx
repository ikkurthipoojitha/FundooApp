import React, { useEffect } from "react";
import { useState } from "react";
// import './dashboard.css';
import Header from "../Header/header";
import TakeNoteOne from "../Takenote1/takenote1";
import TakeNoteTwo from "../takenote2/takenotetwo";
import TakeNoteThree from "../takenote4/takenote4";
import { getNotesList } from "../../services/dataservice";
import Drawer1 from "../drawer/drawer";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyle=makeStyles({
    dashboardgrid :{
        maxWidth:'75vw' ,
        marginLeft: '200px !important',
         border: '0px solid yellow', 
        /* flexGrow:'1', */
        height: 'auto',
    },
    ['@media only screen and (min-width :360px) and (max-width :480px)']: {
        dashboardgrid :{
            width: '70vw',
            marginLeft: '10px !important',
            border: '1px solid yellow',
            width: '25vw',
            height: 'auto',
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        dashboardgrid: {
            width:'70vw',
            marginLeft: '20px !important',
            border: '0px solid yellow',
            width: '25vw',
            height: 'auto',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        dashboardgrid :{
            width: '70vw',
            marginLeft: '40px',
            border: '0px solid yellow',
            width: '25vw',
            height: 'auto',
        },
    },
    
    
    
})

function Dashboard(){
    const classes = useStyle();

    const [drawToggle,setDrawToggle] = useState(false)
    const [toggle,setToggle] = useState(false)
    const [notesList, setNotesList] =useState([])
    const [currentNoteOption,setCurrentNoteOption] = useState('Notes')

    const listenToDrawer = (noteOptionListener) =>{
        setCurrentNoteOption(noteOptionListener)
    }

    const listenToTakeNoteOne = () =>{
        setToggle(true)
    }
    const getNote = ()=>{
        getNotesList().then((response)=>{
            let filterNotes = []
            if(currentNoteOption === 'Notes'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(currentNoteOption === 'Archive'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === true && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if (currentNoteOption === 'Trash'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === false && notes.isDeleted === true){
                        return notes
                    }
                })
            }
            console.log(response);
            setNotesList(filterNotes)
        }).catch((error)=>console.log(error))
    }

    const listenToTakeNoteTwo = () =>{
        setToggle(false)
    }
    const autoRefresh = () =>{
        getNote()
    }
    useEffect(()=>{
        getNote()
    },[currentNoteOption])
    
    const listenToHeader = () =>{
        setDrawToggle(!drawToggle)
    }
    console.log(notesList,"notes")


    return(
        <div>
            <Header listenToHeader = {listenToHeader}/>
            <Drawer1 drawToggle = {drawToggle} listenToDrawer = {listenToDrawer}/>
            <div>
            {
                toggle ? <TakeNoteTwo listenToTakeNoteTwo = {listenToTakeNoteTwo}/>  : 
                <TakeNoteOne listenToTakeNoteOne = {listenToTakeNoteOne} />
            }
            
            </div>
            <Grid container spacing = {2} className={classes.dashboardgrid} // columns={{ xs: 12, sm: 12, md: 12 }}
        //style={{width:'75vw',height:'auto',border:'0px solid yellow',flexGrow:1,
          // display:'flex',marginTop:'10px',marginLeft:'300px'}}
           >
                {
                    notesList.map((note)=>(<Grid item lg = {2.3} md = {5} sm={4} xs = {12}
                        style = {{border:'0px solid black',width:'17vw',marginLeft:'70px'}}
                        > <TakeNoteThree note = {note} 
                        autoRefresh = {autoRefresh} /></Grid>))
                }
            </Grid>
        </div>
    )
}
export default Dashboard