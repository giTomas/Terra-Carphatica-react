import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease-out 0.1s;
  transform: scale3d(1, 1, 1);
  display: block;
  filter: grayscale(100%);

  &:hover {
    transform: scale3d(1.25, 1.25, 1);
  }
`;

export default Image;
