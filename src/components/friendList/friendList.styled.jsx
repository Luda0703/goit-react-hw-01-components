import styled from '@emotion/styled';


export const ItemList = styled.ul `
margin-top: 100px;
display: blok;
text-align: center;
width: 300px;
list-style: none;
padding: 0;
`

export const Item = styled.li `
padding: 10px;
display: flex;
margin-bottom: 15px;
box-shadow: 0px 4px 10px 4px #9e9e9e;
width: 100%;
justify-content: center;
align-items: center;
gap: 10px;
background-color: #fff;
`
export const ItemIsOnline = styled.span `
display: blok;
width: 10px;
height: 10px;
border-radius: 50px;
background-color: ${(props) => (props.status ? 'green' : 'red')};
margin-right: 20px;


`

export const ItemImg = styled.img `
width: 48px;
margin-right: 20px;
`

export const ItemName = styled.p `
font-weight: 500;
font-size: 20px;
`