import React from 'react';
import styled from 'styled-components';
import Layout from '../../../components/Layout';

const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
`

const Sidebar = styled.div`
    border-right: solid;
`

const Header = styled.h1`
    font-family: shrikhand;
    font-size: 20px;
    
`

export default function Index() {
    return(
        <Layout>
            <Grid>
                <Sidebar>
                    <Header>Coming Soon</Header>
                </Sidebar>
            </Grid>
        </Layout>
    )
}

