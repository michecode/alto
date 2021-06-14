import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import 'fontsource-montserrat/400-normal.css';
import 'fontsource-shrikhand/400-normal.css';

const TextContainer = styled.div`
  @media (max-width: 960px) {
    margin: 8vh auto 0 auto;
    width: 90%;
  }
  @media (min-width: 960px) {
    margin: 200px auto 0 auto;
    width: 45%;
  }
`;

const Header = styled.h1`
  font-family: montserrat;
  @media (max-width: 960px) {
    font-size: 45px;
  }
  @media (min-width: 960px) {
    font-size: 72px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  // @media (min-width: 960px) {
  //   margin-right: 200px;
  // }
`;

const Divider = styled.hr`
  color: var(--color-text);
  width: 50%;
`;

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content={`About, Alto, Plants`} />
        <meta name="description" content={`About Alto`} />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>About - Alto</title>
      </Helmet>
      <TextContainer>
        <Header>about</Header>
        <Description>
          Hi my name is Maddy, after spending time searching different websites
          for instructions to care for each plant in my house I decided I could
          make a website that puts all the knowledge one could need into a
          single website.
        </Description>
        <Description>
          My goal for this website is to make it easy, simple, and intuitive to
          obtain all the information one needs to care for their plants. While I
          wish for this website to have 100% of the resources one could ever
          need, it's not realistic. Thus more advanced problems are not likely
          covered on this website.
        </Description>
        <Description>
          Currently it is just me working on this website. If you want to talk,
          feel free to email about anything.
        </Description>
        <Description>
          If you are at all tech-y lol. This site's frontend is actually open
          sourced on my{' '}
          <a href="https://github.com/michecode/plant-vision">github</a>. Also
          there's more about my tech stack down below if you're curious.
        </Description>
        <Divider />
        <p
          style={{
            fontFamily: 'shrikhand',
            fontSize: '25px',
            textAlign: 'center',
          }}
        >
          hi@alto.earth
        </p>
        <Divider />
        <Header style={{ marginTop: '15px' }}>art</Header>
        <Description>
          All plant illustrations on this website are created by me.
        </Description>
        <Description>
          All icons you see besides the logo are sourced from free/open icon
          sets. Primarily sourced from <a href="https://icons.mono.company">Mono's</a> icon set
          and I think I used a couple from <a href="https://systemuicons.com/">systemuicons</a>. All fonts
          used are provided by{' '}
          <a href="https://github.com/fontsource/fontsource">fontsource</a>.
        </Description>
        <Header style={{ marginTop: '15px' }}>monetization</Header>
        <Description>
          I aim to make money from the work I put into this website in order to
          pay off my student loans. There may be ads on some pages and affiliate
          links on others. Additionally I sell merch with the plant assets.
        </Description>
        <Description>
          If you wish to support the site directly, I currently have all the
          plant art on RedBubble. You can find the links on all individual plant
          pages.
        </Description>
        <Description>
          A quick note on privacy on this website - I may use cloudflare
          analytics for internal development currently and use a couple
          kilobytes to store your theme preference on your browser locally. If
          you are worried about your privacy, I recommend using an ad blocker
          such as <a href="https://ublockorigin.com">Ublock Origin</a> and a
          tracker blocker such as{' '}
          <a href="https://privacybadger.org">Privacy Badger</a>. Additionally,
          if you wish to support my site but maintain privacy I recommend you
          use <a href="https://brave.com">Brave Browser</a> and show your
          friends the site.
        </Description>
        <Header style={{ marginTop: '15px' }}>tech</Header>
        <Description>
          This site is a "static" site generated with a react framework called{' '}
          <a href="https://gatsbyjs.com">gatsby</a>. I found this framework fit
          my needs pretty well and I was able to leverage the cheap hosting of
          static sites because my data set should rarely change.
        </Description>
        <Description>
          Also, this website is hosted on{' '}
          <a href="https://render.com">Render</a>. They're super cheap and easy.
        </Description>
      </TextContainer>
    </Layout>
  );
}
