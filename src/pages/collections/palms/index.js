import React from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../../../components/Layout';
import CollectionPlants from '../../../components/CollectionPlants';
import PlantCard from '../../../components/PlantCard';
import 'fontsource-montserrat/400-normal.css';
import 'fontsource-shrikhand/400-normal.css';

const Container = styled.div`
  @media (min-width: 960px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.h1`
  font-family: shrikhand;
  color: var(--color-text);
  margin-bottom: 0px;
  @media (max-width: 960px) {
    font-size: 50px;
    text-align: center;
  }
  @media (min-width: 960px) {
    font-size: 72px;
    margin-left: 25px;
  }
`;

const TitleHelper = styled.p`
  font-family: montserrat;
  font-style: italic;
  color: var(--color-text);
  margin-top: 0px;
  margin-left: 15px;
  @media (max-width: 960px) {
    font-size: 25px;
    text-align: center;
  }
  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  // @media(max-width: 960px) {
  //   margin-left: 15px;
  //   margin-right: 15px;
  // }
  // @media(min-width: 961px) {
  //   margin-left: 15px;
  //   margin-right: 15px;
  // }
  margin-left: 15px;
  margin-right: 15px;
`;

export default function Index({ data }) {
  const plants = data.allMongodbAltoDbPlants.edges;

  const mappedPlants = plants.map(plant => {
    return (
      <div
        onClick={() => navigate(`../../plants/${plant.node.mongodb_id}`)}
        key={plant.node.name}
      >
        <PlantCard name={plant.node.name} id={plant.node.mongodb_id} />
      </div>
    );
  });

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={`Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems, Palm, Palms`}
        />
        <meta name="description" content={`Alto's collection of palms`} />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Palm Collection</title>
      </Helmet>
      <Container>
        <Title>Palms</Title>
        <TitleHelper>
          <StarIcon /> general care page
        </TitleHelper>
        <CollectionPlants>{mappedPlants}</CollectionPlants>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit
          amet massa vitae. Diam maecenas ultricies mi eget mauris pharetra et.
          Arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat
          imperdiet sed euismod nisi. Eros in cursus turpis massa tincidunt.
          Volutpat maecenas volutpat blandit aliquam. Ac orci phasellus egestas
          tellus rutrum tellus. Et leo duis ut diam quam nulla porttitor massa.
          Dolor sit amet consectetur adipiscing elit duis tristique. Turpis
          egestas pretium aenean pharetra magna. Non consectetur a erat nam at
          lectus urna. Maecenas ultricies mi eget mauris pharetra. Pretium
          viverra suspendisse potenti nullam ac tortor. Id volutpat lacus
          laoreet non curabitur gravida.
        </Text>
        <Text>
          Eleifend mi in nulla posuere sollicitudin aliquam. Imperdiet dui
          accumsan sit amet nulla facilisi morbi tempus iaculis. Et tortor at
          risus viverra adipiscing at in tellus. Consequat id porta nibh
          venenatis cras sed felis. Vestibulum lectus mauris ultrices eros in.
          Odio pellentesque diam volutpat commodo sed egestas egestas. Aliquam
          faucibus purus in massa tempor nec feugiat nisl pretium. Habitant
          morbi tristique senectus et netus et malesuada. Netus et malesuada
          fames ac turpis. Libero volutpat sed cras ornare arcu dui vivamus.
        </Text>
        <Text>
          {' '}
          Sodales neque sodales ut etiam sit. Consequat mauris nunc congue nisi
          vitae. Ut venenatis tellus in metus vulputate eu scelerisque felis
          imperdiet. Ut etiam sit amet nisl purus. Tristique nulla aliquet enim
          tortor at auctor urna. Laoreet non curabitur gravida arcu ac tortor
          dignissim convallis. Tellus pellentesque eu tincidunt tortor aliquam
          nulla facilisi. Sed elementum tempus egestas sed sed risus. Laoreet
          sit amet cursus sit amet dictum sit amet. Non enim praesent elementum
          facilisis leo vel fringilla est. Velit aliquet sagittis id consectetur
          purus ut faucibus pulvinar elementum. Non nisi est sit amet facilisis
          magna. Vitae congue eu consequat ac felis. Ipsum dolor sit amet
          consectetur adipiscing elit. Nascetur ridiculus mus mauris vitae
          ultricies leo integer malesuada nunc. Sed lectus vestibulum mattis
          ullamcorper velit sed. Felis eget velit aliquet sagittis id
          consectetur purus. Mauris sit amet massa vitae tortor condimentum
          lacinia. Cursus turpis massa tincidunt dui. Euismod quis viverra nibh
          cras pulvinar mattis nunc sed blandit. Id leo in vitae turpis massa
          sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
        </Text>
      </Container>
    </Layout>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 2.5C12.3788 2.5 12.725 2.714 12.8944 3.05279L15.4733 8.2106L21.1439 9.03541C21.5206 9.0902 21.8335 9.35402 21.9511 9.71599C22.0687 10.078 21.9706 10.4753 21.6981 10.741L17.571 14.7649L18.4994 20.4385C18.5607 20.8135 18.4043 21.1908 18.0956 21.4124C17.787 21.6339 17.3794 21.6614 17.0438 21.4834L12 18.8071L6.95621 21.4834C6.62059 21.6614 6.21303 21.6339 5.90437 21.4124C5.5957 21.1908 5.43927 20.8135 5.50062 20.4385L6.42903 14.7649L2.3019 10.741C2.02939 10.4753 1.93133 10.078 2.04894 9.71599C2.16655 9.35402 2.47943 9.0902 2.85606 9.03541L8.52667 8.2106L11.1056 3.05279C11.275 2.714 11.6212 2.5 12 2.5ZM12 5.73607L10.0819 9.57221C9.93558 9.86491 9.65528 10.0675 9.33144 10.1146L5.14839 10.723L8.1981 13.6965C8.43179 13.9243 8.53958 14.2519 8.48687 14.574L7.80001 18.7715L11.5313 16.7917C11.8244 16.6361 12.1756 16.6361 12.4687 16.7917L16.2 18.7715L15.5131 14.574C15.4604 14.2519 15.5682 13.9243 15.8019 13.6965L18.8516 10.723L14.6686 10.1146C14.3447 10.0675 14.0644 9.86491 13.9181 9.57221L12 5.73607Z"
      ></path>
    </svg>
  );
}

export const query = graphql`
  query {
    allMongodbAltoDbPlants(filter: { classification: { eq: "Palm" } }) {
      edges {
        node {
          classification
          mongodb_id
          name
        }
      }
    }
  }
`;
