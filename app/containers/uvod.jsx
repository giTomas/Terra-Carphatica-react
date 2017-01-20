import React from 'react';
// import shortid from 'shortid';
import styled from 'styled-components';
import Container from './elements/container';
import Main from './elements/main';
import { addUnits } from '../helpers/helpers';
import { margin } from '../styles/style';

const Banner = styled.div`
  background-image: url('/app/assets/images/bg-2.JPG');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 60vh;
  position: relative;
  margin-bottom: ${addUnits((margin * 2), 'rem')};
  filter: grayscale(100%);
`;

class Uvod extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <Main>
        <Banner />
        <Container>
          <h1>{ this.constructor.name }</h1>
        </Container>
      </Main>
    );
  }
}

export default Uvod;
