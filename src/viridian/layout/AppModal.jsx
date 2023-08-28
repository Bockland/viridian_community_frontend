import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { Button } from '@mui/material';

Modal.setAppElement('#root');

export const AppModal = ({children, color, icon, width, height}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ref = useRef();

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {        
        setModalIsOpen(false);
    }

    const customStyles = {
        overlay: {
            zIndex: 1, 
            background: 'rgb(91 91 91 / 75%)'
        },
        content: {            
            margin: 'auto', 
            height: height,
            width: width,
            background: 'none',
            border: 'none'
        },
    };

    return (

        <div className='app-div-100'>
            <div className='app-div-centrado-90'>
                <Button
                    variant="contained"
                    color= {color}
                    onClick={() => openModal()}                    
                >
                    {icon}
                </Button>
                <div className="modal-content" ref={ref}>
                    <Modal
                        isOpen={modalIsOpen}                   
                        style={customStyles}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={true}
                    >
                        {children}
                    </Modal>
                </div>
            </div>  
        </div> 
    )

}
