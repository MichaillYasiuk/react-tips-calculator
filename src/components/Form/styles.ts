import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  width: clamp(300px, 100%, 500px);
  padding: 20px;
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 15px;
`;

const Title = styled.h2`
  justify-self: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Subtitle = styled.h6`
  justify-self: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Total = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export { StyledForm, Title, Subtitle, Total, InputGroup };
