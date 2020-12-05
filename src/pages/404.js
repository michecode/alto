import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import 'fontsource-shrikhand/400-normal.css';
import 'fontsource-montserrat/400-normal.css';

const fourohfour = styled.div`
  
`

const SplashText = styled.h1`
  font-family: shrikhand;
  font-size: 50px;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
`

const Text = styled.p`
  color: var(--color-text);
`

const NotFoundPage = () => (
  <Layout>
    <fourohfour>
      <SplashText>404 - Page not found</SplashText>
      <Text>awkward</Text>
      <Text>sorry if i broke something. or you made this url up. don't punch in random urls please :/</Text>
    </fourohfour>
  </Layout>
);

export default NotFoundPage;