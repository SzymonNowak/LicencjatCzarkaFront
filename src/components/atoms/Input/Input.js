import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  border: 1px solid ${({ theme }) => theme.orange};
  border-radius: 50px;
  ::placeholder {
    text-align:center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

export default Input;
