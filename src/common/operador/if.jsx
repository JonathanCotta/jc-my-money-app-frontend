import React from 'react'
import { isRegExp } from 'util';

export default props => {
    if (props.test) {
        return props.children
    } else {
        return false;
    }
}