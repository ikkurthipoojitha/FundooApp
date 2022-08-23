// import React from "react";
// import './takenote4.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ColorPopper from "../colorpopper/color";
import { archiveNotes, trashNotes } from "../../services/dataservice";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputBase } from "@mui/material";
import { updateNotes } from '../../services/dataservice';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

const useStyle=makeStyles({
    maincontainer:{
        width:'17vw',
        height:'25vh',
        /* border:' 1px solid yellow', */
    },
    container4:{
        width: '100%',
        height: '120px',
        display: 'flex',
        flexDirection: 'row',
        /* flexWrap: 'wrap', */
        /* marginLeft: '20px', */
        justifyContent: 'space-around',
        /* border:'1px solid maroon', */
    },
    paperwidth:{
        width: '100%',
        height:'90%',
    },
    
    takeone3:{
        width: '250px',
        height: '110px',
        display: 'flex',
        /* marginRight: '0px',  */
        /* marginTop: '10px',  */
        flexDirection: 'column',
        // left:'90px',
       //border: '1px solid red', 
        justifyContent: 'space-between',
        borderRadius: '2px',
        /* bottom:'30px', */
    },
    takenotetitle:{
        width:'100%',
        height:'30%',
        /* marginTop: '18px', */
        /* marginLeft: '500px', */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        /* backgroundColor:'white', */
        /* border: '1px dashed blue', */
    },
    takenotecontainerdescription:{
        width:'100%',
        height:'30%',
        /* marginLeft: '500px', */
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'row',
        /* justify-content: 'space-around', */
        /* background-color: 'white', */
        /* border: '1px solid blue', */
    },
    pid3:{
        width: '450px',
        /* border:'1px solid violet', */
        textAlign: 'left',
        marginLeft:'5px',
    
    },
    pid4:{
        width:'450px',
        textAlign: 'left',
        marginLeft:'5px',
    
    },
    iconcontainer:{
        width:'100%',
        height:'30%',
        /* marginTop: '2px', */
        marginLeft:'0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        /* backgroundColor: 'white', */
        /* border: '1px solid blue', */
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        container4:{
            width: '75vw',
            height: '25vh',
            display: 'flex',
            /* border: '1px dashed purple', */
        },
        paperwidth:{
            width: '90%',
            height:'90%',
            },
            
        takeone3:{
            width:'75%',
            height:'auto',
            /* border: '1px solid red', */
            display: 'flex',
            flexDirection:'column',
            /* alignItems:'center' ,
            alignContent: 'flex-start',
            justifyContent: 'space-between', */
            flexWrap: 'wrap',
            /* marginRight:'90px', */
        },
        takenotetitle:{
            width:'100%',
            height: 'auto',
        },
        takenotecontainerdescription:{
            width: '100%',
            height: 'auto',
            /* border:'1px solid blueviolet', */
        },
        iconcontainer:{
            width:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },    
    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        container4:{
            width: '75vw',
            height: '25vh',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            /* border: '1px dashed purple', */
        },
        paperwidth:{
            width: '65%',
            height:'80%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            /* border: '1px solid green', */
    
        },  
        takeone3:{
            width:'65%',
            height:'auto',
            /* border: '1px solid red', */
            display: 'flex',
            flexDirection:'column',
            /* alignItems:'center' ,
            alignContent: 'flex-start', */
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            // marginRight:'90px',
        },
        takenotetitle:{
            width:'100%',
            height: 'auto',
        },
        takenotecontainerdescription:{
            width: '100%',
            height: 'auto',
            /* border:'1px solid blueviolet', */
        },
        iconcontainer:{
            width:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    ['@media only screen and (min-width :721px) and (max-width :1024px)']: {
        container4:{
            width: '65vw',
            height: '25vh',
            display: 'flex',
            /* border: '1px dashed purple', */
        },
        paperwidth:{
            width: '65%',
            height:'90%',
        },
            
        takeone3:{
            width:'75%',
            height:'auto',
            /* border: '1px solid red', */
            display: 'flex',
            flexDirection:'column',
            /* alignItems:'center' ,
            alignContent: 'flex-start', */
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginRight:'90px',
        },
        takenotetitle:{
            width:'100%',
            height: 'auto',
        },
        takenotecontainerdescription:{
            width: '100%',
            height: 'auto',
            /* border:'1px solid blueviolet', */
        },
        iconcontainer:{
            width:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    
    
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 540,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TakeNoteThree(props) {
    const classes = useStyle();

    const [open, setOpen] = React.useState(false);

    const handleOpen = (noteObj) => {
        console.log(noteObj, "modify")
        setOpen(true);
        setInputFields({
            noteId: noteObj.id,
            title: noteObj.title, description: noteObj.description
        })
    }

    const handleClose = () => setOpen(false);

    const [inputFields, setInputFields] = useState({ noteId: '', title: '', description: '' })
    const takingTitle = (event) => {
        setInputFields(previousState => ({ ...previousState, title: event.target.value }))

    }
    const takingDescription = (event) => {
        setInputFields(previousState => ({ ...previousState, description: event.target.value }))

    }
    const updateArchive = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archiveNotes(archiveObj).then((response) => {
            console.log(response);
            // props.autoRefresh()
            props.listenTocolorUpdate()
        }).catch((error) => { console.log(error) })
    }
    const updateDelete = (id) => {
        let deleteObj = { noteIdList: [id], isDeleted: true }
        trashNotes(deleteObj).then((response) => {
            console.log(response);
            // props.autoRefresh()
        }).catch((error) => console.log(error))
    }
    const listenTocolorUpdate = () => {
        props.autoRefresh()
    }

    const saveUpdate = () => {
        updateNotes(inputFields).then((response) => {
            props.autoRefresh()
        }).catch((error) => { console.log(error) })
        setOpen(false);

    }
    return (
        <div className={classes.maincontainer}>
            <div className={classes.container4}>

                <div className={classes.takeone3}
                //  style={{ backgroundColor: props.note.color,marginRight:'20px' }} 
                 >
                    <Paper className={classes.paperwidth} style={{ backgroundColor: props.note.color }}>
                    <div className={classes.takenotetitle} onClick={() => handleOpen(props.note)} >
                        <div className={classes.pid3} >{props.note.title}</div>
                        <PushPinIcon />

                    </div>
                    <div className={classes.takenotecontainerdescription}>
                        <div className={classes.pid4}>{props.note.description}</div>
                    </div>

                    <div className={classes.iconcontainer}>
                        <AddAlertIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                        <ContactPageIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                        <ColorPopper id={props.note.id} action="update"
                            // autoRefresh={props.autoRefresh()} 
                            listenTocolorUpdate={listenTocolorUpdate} />
                        {/* <ColorLensIcon fontSize="small" style = {{width:'2 ch',height:'2ch'}}/> */}
                        {/* <ImageIcon fontSize="small" style = {{width:'2 ch',height:'2ch'}} /> */}

                        <ArchiveIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }}
                            onClick={() => updateArchive(props.note.id)} />
                        <DeleteOutlinedIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }}
                            onClick={() => updateDelete(props.note.id)} />
                        <MoreVertIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                    </div>
                    </Paper>
                </div>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} style={{ backgroundColor: props.note.color}} >
                    <div className={classes.takenotecontainer1} >
                        <InputBase defaultValue={inputFields.title} onChange={takingTitle} />
                        <PushPinIcon />

                    </div>
                    <div className={classes.takenotecontainer2}>
                        <InputBase defaultValue={inputFields.description}
                            onChange={takingDescription} />
                    </div>
                    <div className={classes.iconcontainer}>
                        <AddAlertIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                        <ContactPageIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                        <ColorPopper  id={props.note.id} action="update"
                            // autoRefresh={props.autoRefresh()} listenTocolorUpdate={listenTocolorUpdate}
                            />

                        <ArchiveIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }}
                            onClick={() => updateArchive(props.note.id)} />
                        <DeleteOutlinedIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }}
                            onClick={() => updateDelete(props.note.id)} />
                        <MoreVertIcon fontSize="small" style={{ width: '2 ch', height: '2ch' }} />
                        <UndoIcon fontSize="medium" style = {{width:'2 ch',height:'2ch'}}/>
                    <RedoIcon fontSize="medium" style = {{width:'2 ch',height:'2ch'}} />
                        <button type="submit" onClick={saveUpdate} style={{ backgroundColor: props.note.color}} > Close</button>

                    </div>

                </Box>
            </Modal>

        </div>
    )
}
export default TakeNoteThree