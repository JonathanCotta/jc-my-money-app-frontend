import React from 'react';
import Select from './select';
import Grid from '../layout/grid';


export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <Select 
                {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                options={props.options}
                defaultValue={props.defaultValue}
                />
        </div>
    </Grid>
);