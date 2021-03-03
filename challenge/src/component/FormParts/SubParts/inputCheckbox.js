import React from 'react';
import { Field } from 'formik';

const InputCheckbox = ({name, title, checkboxname, checkboxtitle}) => {
    return ( 
        <>
        <label htmlFor={name}>{title}</label>
                <div  className="d-flex align-items-center">
                <span className="signo">$</span><Field 
                        id={name} 
                        type="number" 
                        name={name}                        
                        placeholder=""
                        />
                        
                </div>
                <div className="inlineCheck align-items-start">
                <Field 
                id={checkboxname} 
                type="checkbox" 
                name={checkboxname}
                />
                <label htmlFor={checkboxname}>{checkboxtitle}</label>
                </div>
        </>
     );
}
 
export default InputCheckbox;