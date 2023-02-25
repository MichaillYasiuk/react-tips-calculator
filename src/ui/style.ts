import styled from 'styled-components';
import shapes from '../assets/image/shapes.svg';

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: no-repeat url(${shapes}) #eaf2f2;
  background-position: top left;
`;

export { StyledApp };
