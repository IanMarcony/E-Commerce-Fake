import styled from "styled-components/native"

export const Container = styled.View`
  flex:1;
  background-color:#FBFBFB; 
  align-items:center;
  justify-content:center; 
` 
export const TextWithoutList = styled.Text`
  font-size:20;
  color:#000;
  font-weight:bold;
  text-align:center;
  margin:10px;

`

export const CartList = styled.FlatList`
  
  width:390;
  background-color:#fff;
  margin-top:10;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 3.84; 
  elevation:2;
  margin-bottom:5;
  margin-left:3;
  margin-right:3;
  padding-left:5;
  padding-right:5;
  padding-top:5;
`

export const ButtonAddProduct = styled.TouchableOpacity`
flex:1;
height:40;
align-items:center;
justify-content:center; 
margin-top:5;
margin-bottom:5;
margin-left:5;
margin-right:5;
`

export const ButtonAddProductText = styled.Text`
font-size:14;
color:#F44336;
text-align:center;
`
export const ButtonArea = styled.View`
align-items:center;
justify-content:flex-end;
`

export const ButtonFinishArea = styled.TouchableOpacity`
width:190;
height:40;
  background-color:#F44336;
  margin-bottom:10;
  border-radius:6;
  align-items:center;
justify-content:center;

`

export const ButtonFinishText = styled.Text`
  font-size:16;
  font-weight:bold;
  color:#fff;
  text-align:center;
`

export const ButtonCleanCartArea = styled.TouchableOpacity`

align-items:center;
justify-content:center;
`

export const ButtonCleanCartText = styled.Text`
  font-size:18;
  color:#F44336;
  text-align:center;

`


