import styled from 'styled-components';

export const Card = styled.div`
background: ${(p) => p.theme.color.background};
border: 1px solid ${(p) => p.theme.color.border};
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 30rem;
height: 35rem;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);
padding: 2rem;

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -45%);

@media (max-width: ${(props) => props.theme.screen.xs}) {
  width: 22rem;
  height: 28rem;
}
`;
