import React from "react";
// import './takenote2.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { useState } from "react";
import { InputBase } from "@mui/material";
import { postNote } from "../../services/dataservice";
import ColorPopper from "../colorpopper/color";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

const useStyle=makeStyles({
    container1:{
        width: '100vw',
        height: '40vh',
        display: 'flex',
        flexDirection: 'row',
        /* border:' 1px solid blue', */
    },
    takeone:{
        width: '520px',
        height: '180px',
        display: 'flex',
        marginLeft: '480px',
        marginTop: '0px',
        flexDirection: 'column',
        // border: '1px solid red', 
        borderRadius: '25px',
    },
    takenotecontainer1:{
        width:'100%',
        height:'50px',
        marginTop: '18px',
        /* margin-Left: '500px', */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        /* backgroundColor:'white', */
        /* border: '1px dashed blue', */
    },
    takenotecontainer2:{
        width:'500px',
        height:'50px',
        /* marginLeft: '500px', */
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'row',
        /* justifyContent:' space-around', */
        /* backgroundColor: 'white', */
        /* border: '1px solid blue', */
    },
    takenotecontainericon:{
        width:'500px',
        height:'55px',
        /* marginLeft: '500px', */
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'row',
        /* justifyContent: 'space-around', */
        /* backgroundColor: 'white', */
        /* border: '1px solid blue', */
    },
    pid1:{
        width: '450px',
        /* border:'1px solid violet', */
        textAlign: 'left',
    },
    pid2:{
        width:'450px',
        textAlign: 'left',
        marginLeft:'5px',
    
    },
    takenotecontainer3:{
        width:'500px',
        height:'40px',
        /* marginTop: '2px', */
        marginLeft:'0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        /* background-color: 'white', */
        /* border: '1px solid blue', */
    },
    closeid1:{
        textAlign: 'right',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        takeone:{
            width:'98vw',
            height:'35vh',
            display: 'flex',
            marginLeft:'90px',
            /* border:'1px solid green', */
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        takenotecontainer1:{
            width:'300px',
            height:'20%',
            /* border:'1px solid green', */
        },
        takenotecontainer2:{
            width:'100%',
            height:'20%',
        },
        takenotecontainer3:{
            width:'100%',
            height:'50%',
            display: 'flex',
        },
        takenotecontainericon:{
            width:'100%',
            height:'45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        closebutton:{
            width:'100%',
            height:'50%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            /* border:'1px solid red',
            marginBottom:'10px', */
        },
        closeid1:{
            width:'30%',
            height:'70%',
            marginRight:'10px',
            marginBottom:'10px',
            /* border:'1px solid green', */
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        takeone:{
            width:'90vw',
            height:'35vh',
            display: 'flex',
            marginLeft:'90px',
            /* border:'1px solid green', */
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        takenotecontainer1:{
            width:'420px',
            /* border:'1px solid green', */
    
            height:'20%',
        },
        takenotecontainer2:{
            width:'420px',
            height:'20%',
    
        },
        takenotecontainer3:{
            width:'100%',
            height:'50%',
            display: 'flex',
    
        },
        takenotecontainericon:{
            width:'420px',
            height:'45%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }, 
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        takeone:{
            width:'100vw',
            height:'35vh',
            display: 'flex',
            marginLeft:'90px',
            /* border:'1px solid green', */
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        takenotecontainer1:{
            width:'500px',
            /* border:1px solid green, */
    
            height:'20%',
        },
        takenotecontainer2:{
            width:'500px',
            height:'20%',
    
        },
        takenotecontainer3:{
            width:'100%',
            height:'50%',
            display: 'flex',
        },
        takenotecontainericon:{
            width:'500px',
            height:'45%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    
})

function TakeNoteTwo(props) {

    const classes = useStyle();

    const [userInput, setUserInput] = useState({
        title: '', description: '', color: '', isArchived: false,
        isDeleted: false
    })
    const openTakeNoteOne = () => {
        props.listenToTakeNoteTwo()
        postNote(userInput).then((response) => {
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
    }
    const takingTitle = (event) => {
        setUserInput(previousState => ({ ...previousState, title: event.target.value }))

    }
    const takingDescription = (event) => {
        setUserInput(previousState => ({ ...previousState, description: event.target.value }))

    }

    const listenToColorPopper = (colour) => {
        setUserInput(previousState => ({ ...previousState, color: colour }))

    }
    const archiveNote = () => {
        setUserInput(previousState => ({
            ...previousState,
            isArchived: true
        }))
        console.log("archived note")
    }
    const deleteNote = () => {
        setUserInput(previousState => ({
            ...previousState,
            isDeleted: true
        }))
        console.log("Deleted note")
    }

    return (
        <div >
            <div className={classes.container1} >
                    <div className={classes.takeone} style={{ backgroundColor: userInput.color }}>
                    <Card>
                        <div className={classes.takenotecontainer1}>
                            <InputBase placeholder="Title" onChange={takingTitle} />
                            <PushPinIcon />

                        </div>
                        <div className={classes.takenotecontainer2}>
                            <InputBase placeholder="Description"
                                onChange={takingDescription} />

                        </div>
                        <div className={classes.takenotecontainericon}>
                        <div className={classes.takenotecontainer3}>
                            <AddAlertIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} color="" />
                            <ContactPageIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} />
                            <ColorPopper listenToColorPopper={listenToColorPopper}
                                action="create" />
                            {/* <ColorLensIcon fontSize="medium" style = {{width:'2 ch',height:'4ch'}}/> */}
                            <ImageIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} />
                            <ArchiveIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }}
                                onClick={archiveNote} />
                            {/* < DeleteOutlinedIcon fontSize="medium" style = {{width:'2 ch',height:'2ch'}}
                    onClick = {deleteNote}/> */}
                            <MoreVertIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} />
                            <UndoIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} />
                            <RedoIcon fontSize="medium" style={{ width: '2 ch', height: '2ch' }} />
                            </div>
                            <div className={classes.closebutton}>
                            <p onClick={openTakeNoteOne} className={classes.closeid1}> Close</p></div>
                            {/* <InputBase id="filled-search" placeholder="Close" onClick = {openTakeNoteOne} id="closeid1" /> */}

                        </div>
                        </Card>

                    </div>
            </div>
        </div>


    )
}

export default TakeNoteTwo