import styled from '@emotion/styled';

export const User = styled.div `
display: blok;
position: absolute;
width: 300px;
height: 600px,
justify-content: center,
align-items: center,
overflow: hidden;
margin-left: avto;
margin-right: avto;
border-radius: 10px
box-shadow: 0px 4px 10px 4px #9e9e9e

background-color: #fff;
`;

export const Description = styled.div`
display: blok;
text-align: center;
padding: 15px;
// position: absolute;
// top: 50%;
// left: 50%;
// margin: -125px 0 0 -125px;
background-color: #fff;

`;

export const UserImg = styled.img`
border-radius: 50%;
width: 100px;
height: 100px;
object-fit: cover;
`;

export const UserName = styled.p `
font-weight: 700;
font-size: 30px;
`
export const TagName = styled.p `
font-weight: 500;
font-size: 20px;
`

export const Location= styled.p `
font-weight: 500;
font-size: 20px;
`

export const Stats = styled.ul `
width: 300px;
display: flex;
list-style: none;
text-decoration: none;
background-color: #D3D3D3;
margin: 0;
padding: 0;
`
export const StatsLi = styled.li `
margin: 0;
padding: 0;
padding: 10px;

` 
export const Label = styled.span `
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
font-size: 20px;
` 
export const Quantity = styled.span `
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 30px;
`