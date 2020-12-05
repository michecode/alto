import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Paper from '@material-ui/core/Paper';


const TopDiv = styled.div`
  text-align: center;
  
`;

const Header = styled.h1`
  color: var(--color-text);
`;

const Timeline = styled.div`
    display: flex;

    @media (max-width: 960px) {
        flex-direction: column;
    }
    @media (min-width: 960px) {
        flex-wrap: wrap;
    }
`

const Card = styled(Paper)`
    && {
        background: rgba(0, 0, 0, 0) linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%, rgba(134, 168, 231, 0.2) 58.46%, rgba(145, 234, 228, 0.2) 97.05%) repeat scroll 0% 0%;
        text-align: center;
        margin-bottom: 10px;
        @media (max-width: 960px) {
            
        }
        @media (min-width: 960px) {
            margin-right: 10px;
        }
    }
`

const Subject = styled.p`
    color: var(--color-text);
    font-size: 24px;
    margin: 15px 5px;
    @media (max-width: 960px) {
        
    }
    @media (min-width: 960px) {
        font-size: 40px;
    }
`

const list = [
    {
        subject: "Popular Plants",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Easy Plants",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Trailing Plants",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Tree Types",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Palms",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Succulents",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Calatheas",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Ferns",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Air Plants",
        eta: 'idk',
        shipped: false,
    },
    {
        subject: "Orchids",
        eta: 'idk',
        shipped: false,
    },
];



export default function Index(props) {
    const cardMap = list.map(item => {
        return(
            <Card>
                <Subject>{item.subject}</Subject>
                {item.eta}
            </Card>
        )
    })

  return (
    <Layout>
      <TopDiv>
        <Header>What I'm Working On</Header>
      </TopDiv>
      <Timeline>
        {/* <Card>
            <Subject>
                bonjour
            </Subject>
        </Card> */}
        {cardMap}
      </Timeline>
      
    </Layout>
  );
}
