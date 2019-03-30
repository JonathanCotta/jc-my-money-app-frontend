import React from 'react';

export default props => {
    const {
        options = [],
        input,
        placeholder,
        readOnly,
        type,
        defaultValue,
    } = props;

    const list = options.map(opt =>
        (
            <option 
                key={opt.value}
                value={opt.value}>
                    {opt.text}
            </option>
        )
    );
    console.log('value', defaultValue)
    return (
        <select
            {...input}
            className='form-control'
            placeholder={placeholder}
            readOnly={readOnly}
            type={type}
            value={defaultValue}
        >
            {list}
        </select>
    );
}