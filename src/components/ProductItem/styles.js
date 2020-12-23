import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
  width:100;
  height:250;
  padding-top:10;
  padding-bottom:10;
  padding-left:10;
  padding-right:10;
  flex-direction:column;
  margin-top:4;
  margin-bottom:4;
  margin-right:4;
  margin-left:4;
  flex-grow:3;
  background-color:#fff;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 3.84; 
  elevation:5;
  justify-content:center;
  align-items:center;
  
` 

export const TextTitle = styled.Text`

  font-size:14;
  color:#000;
  text-align:left;
`

export const TextPrice = styled.Text`

  font-size:12;
  color:#000;
  font-weight:bold;  
  text-align:left;
`

export const ImageProduct= styled.Image`
flex:1;
  width:95%;
  height:50%;

`