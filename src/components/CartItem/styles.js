import styled from "styled-components/native"

export const Container = styled.View`
  width:100%;
  height:200;
  background-color:#fff; 
  flex-direction:row;    
  align-items:center;
  border-bottom-width:1;
  border-color:#ddd;
  padding-top:5;
  padding-bottom:5;
` 

export const ImageProduct = styled.Image`
  flex:1;
  width:80%;
  height:70%;
  justify-content:flex-start;
  align-items:center
`

export const AboutArea= styled.View`
  flex:4; 
  justify-content:flex-start;
  margin-left:5;

`

export const TitleArea = styled.View`
  
`

export const TextTitle= styled.Text`
  font-size:14;
  color:#000;
  font-weight:bold;
  text-align:left;
`

export const IconAreaButton=styled.TouchableOpacity`
  align-items:flex-end;

`
export const MoreArea= styled.View`
  flex-direction:row;

`

export const CategoryQuantityArea= styled.View`
  justify-content:flex-start;
`
export const CategoryText=styled.Text`
  font-size:12;
  color:#DBDBDB;


`


export const QuantityArea = styled.View`
  
  flex-direction:row;
  align-items:center;
`

export const QuantityText = styled.Text`
  width:40%;
  font-size:12;
  color:#DBDBDB;

`

export const ButtonQuantityArea = styled.TouchableOpacity`


`

export const PriceText = styled.Text`
  font-size:20;
  color:#000;
  font-weight:bold;
  text-align:right;
  align-items:flex-end;



`

