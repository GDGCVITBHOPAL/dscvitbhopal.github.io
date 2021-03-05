import styled from 'styled-components';

export const Card = styled.div`
background: ${(p) => p.theme.color.background};
border: 1px solid ${(p) => p.theme.color.border};
border-radius: 5px;
box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
padding: 1rem;
cursor: pointer;
display: flex;
align-items: center;
`;