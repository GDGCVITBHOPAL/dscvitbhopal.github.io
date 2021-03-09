import styled from 'styled-components';

export const Image = styled.img`
width: 24rem;
height: 24rem;
object-fit: contain;

@media (max-width: ${(props) => props.theme.screen.xs}) {
  width: 17rem;
  height: 17rem;
}
`;
