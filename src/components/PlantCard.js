import React from 'react'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PlantPic from './PlantPic';
import 'fontsource-shrikhand/400-normal.css';

const Card = styled(Paper)`
    && {
        background-color: var(--color-paper);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`

const PicWrapper = styled.div`
    margin: 5px auto;
`

const Title = styled.p`
    font-family: shrikhand;
    font-size: 20px;
    // font-size: 100%;
    text-align: center;
    color: var(--color-text);
    margin: 10px 0px 10px 0px;
`

export default function Plantcard(props) {
    return (
        <Card>
            <PicWrapper>
                <PlantPic height={150} width={150} id={props.id} name={props.name}/>
            </PicWrapper>
            <Title>{props.name}</Title>
        </Card>
    )
}
