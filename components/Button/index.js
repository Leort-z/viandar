import styled from 'styled-components'

const StyledButton = styled.button`
  border: 0px;
  border-radius: 15px;
  padding: 15px 30px;

  background-color: var(--secondary);
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 500;

  cursor: pointer;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.1s;
    background-color: var(--secondary-hover);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`

export default function Button(props) {
  return <StyledButton {...props}></StyledButton>
}
