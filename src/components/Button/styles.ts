import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  background: #2ed2c9;
  color: #ffffff;
  font-size: 24px;
  border: none;
  cursor: pointer;
  &:active {
    transform: translateX(2px);
  }
  &:disabled {
    opacity: 0.5;

    transform: none;
  }
`;

export { StyledButton };
