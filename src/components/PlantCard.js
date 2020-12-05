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
    text-align: center;
    color: var(--color-text);
`

export default function Plantcard(props) {
    const name = props.name;

    return (
        <Card>
            <PicWrapper>
                <PlantPic height={150} width={150}/>
            </PicWrapper>
            <Title>{name}</Title>
        </Card>
    )
}
