import styled from 'styled-components';
import { Container } from '../components/global';

export const ContainerStyledGrid = styled(Container)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
padding: 2.5rem 0rem;

@media (max-width: ${props => props.theme.screen.md}) {
  grid-template-columns: 1fr 1fr;
}

@media (max-width: ${props => props.theme.screen.sm}) {
  grid-template-columns: 1fr;
}

@media (max-width: ${props => props.theme.screen.xs}) {
  padding: 2.5rem 3rem;
}
`;
