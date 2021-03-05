import styled from 'styled-components';

export const Search = styled.input`
background: ${p => p.theme.color.background};
color: ${p => p.theme.color.text};
width: 100%;
max-width: 45rem;
font-size: 25px;
outline: none;
border: 1px solid ${p => p.theme.color.border};
border-radius: 5px;
box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
margin-bottom: 2rem;
line-height: 35px;
padding: 20px;
font-weight: 700;
&::placeholder {
  color: ${p => p.theme.color.placeholder};
  font-weight: 500;
}
`;