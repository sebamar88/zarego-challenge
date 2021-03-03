import React, { useState } from 'react';
import { Modal,Button, Container, Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';

import StepOne from './FormParts/StepOne';
import StepTwo from './FormParts/StepTwo';




const PopUp = () => {
    
    //State del PopUp
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    

    
    return ( 
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal size={'xl'} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="headingTitle">Your Financial Aid Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    initialValues={{ escuela:'', admision: '' }}
                    
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                

                <Container>
                    <Form>
                    <StepOne />
                    <h2 className="headingTitle">Grant & Scholarships</h2><div className="line"></div>
                    <p>Add the details of the money you don´t have to pay back: school grants and scholarships, federal grants and private grants.</p>
                    <StepTwo />
                    </Form>
                </Container>    
                
                
                </Formik>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
      
        </>
    

       
     );
}
 
export default PopUp;