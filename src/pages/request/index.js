import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import PlantPic from '../../components/PlantPic';

const Container = styled.div`
//   display: flex;
  @media (min-width: 960px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Index() {
  return (
    <Layout>
      <Container>
        {/* <div> */}
          <PlantPic width={350} height={350}/>
        {/* </div> */}
        <div>
          Hi I'm currently working on coding out new features and pages on the
          website. Feel free to email me at hi@alto.earth to request any
          features and plants, or just ask some questions.
        </div>
      </Container>
    </Layout>
  );
}
