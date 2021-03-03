import React from 'react';
import { Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

const StepOne = () => {
    return ( 
        <Row>
                        <Col xs={12} lg={4}>
                        <label htmlFor="email">Select the School</label>
                        <div className="search">
                        <span class="fa fa-search"></span>
                        <Field                            
                            component="select"
                            id="escuela"
                            name="escuela"
                            multiple={false}
                        >
                            <option defaultValue></option>
                            <option value="e1">Escuela 1</option>
                            <option value="e2">Escuela 2</option>
                            <option value="e3">Escuela 3</option>
                            <option value="e4">Escuela 4</option>
                            <option value="e5">Escuela 5</option>
                            <option value="e6">Escuela 6</option>
                            <option value="e7">Escuela 7</option>
                            <option value="e8">Escuela 8</option>
                            <option value="e9">Escuela 9</option>
                            <option value="e10">Escuela 10</option>
                        </Field>
                        </div>
                        
                        </Col>
                        <Col xs={12} lg={4}>
                        <label htmlFor="admision">Admition Type</label>
                        <Field
                            component="select"
                            id="admision"
                            name="admision"
                            multiple={false}
                            className='form-select form-select-lg mb-3'>
                            <option defaultValue>Select</option>
                            <option value="a1">Escuela 1</option>
                            <option value="a2">Escuela 2</option>
                            <option value="a3">Escuela 3</option>
                            <option value="a4">Escuela 4</option>
                            
                        </Field>
                        
                        </Col>
                        <Col xs={12} lg={4}>
                        <label htmlFor="cost">Total cost of attendance</label>
                        <Field 
                        id="cost" 
                        type="number" 
                        name="cost"                        
                        placeholder=""
                        prefix="$"
                        />
                        
                        </Col>
                    </Row>
     );
}
 
export default StepOne;