import React from 'react'
import styled from 'styled-components';

const Label = styled.label`
    font-size: 18px;
`

const Input = styled.input`
    background-color: var(--color-background);
`

/*
Gets the state's current value, function reference to change the value, and a label
*/
export default function Checkbox(props) {
    

    return (
        <Label>
            <Input
                type="checkbox"
                checked={props.condition}
                onChange={() => props.changeState(!props.condition)}
            />
            {props.name}
        </Label>
    )
}
