import React from 'react';
// import shortid from 'shortid';
import styled from 'styled-components';
import Container from './elements/container';
import Main from './elements/main';
import Sections from './sections';
import Members from './members';
import { addUnits } from '../helpers/helpers';
import { margin } from '../styles/style';

const Banner = styled.div`
  background-image: url('/app/assets/images/bg-2.JPG');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 45vh;
  position: relative;
  margin-bottom: ${addUnits((margin * 2), 'rem')};
  filter: grayscale(100%);
  margin-top: 65px;
`;

// class Uvod extends React.Component {
//   // constructor(props){
//   //   super(props);
//   // }
//
//   render() {
//     return (
//       <Main>
//         <Banner />
//         <Container>
//           <Sections />
//           <Members />
//         </Container>
//       </Main>
//     );
//   }
// }

const Uvod = () => (
  <Main>
    <Banner />
    <Container>
      <Sections />
      <Members />
    </Container>
  </Main>
);

export default Uvod;
