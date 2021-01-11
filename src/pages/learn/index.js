import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import TableOfContent from '../../components/TableOfContent';

export default function Index() {
  const contentjson = require('../../../data/learnContent.json');

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={`Learn, Alto, Plants, Tutorial, Guides, Watering, Sunlight, Light`}
        />
        <meta
          name="description"
          content={`Grow your understanding of plants and become a green thumb`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Learn - Alto</title>
      </Helmet>

      <TableOfContent content={contentjson} />
    </Layout>
  );
}
