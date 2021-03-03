import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InputCheckbox from './SubParts/inputCheckbox'

const StepTwo = () => {
    return ( 
        <div className="innerForm">
            <Row>
                <Col xs={12}>
                    <h3>Institution</h3>      
                </Col>
                <Col xs={12} lg={6}>
                    <InputCheckbox name="bofn" title="Total grants and scholarships based on financial needs" checkboxname="checkbofn" checkboxtitle="Yes, it's renewable" />       
                </Col>
                <Col xs={12} lg={6}>
                
                   <InputCheckbox name="nbofn" title="Total grants and scholarships NOT based on financial needs" checkboxname="checknbofn" checkboxtitle="Yes, it's renewable" />     
                <input type="submit" value="Enviar" />
                </Col>
                
            </Row>
        </div>
        
     );
}
 
export default StepTwo;