import styled from "styled-components/native"


export const Container = styled.View`
  flex:1;  
  background-color:#FBFBFB;
` 


export const TextWithoutList = styled.Text`
  font-size:20;
  color:#000;
  font-weight:bold;
  text-align:center;
  margin:10px;

`

export const TextHeader=styled.Text`  
  width:275px;
  font-size:20;
  font-weight:bold;
  color:#fff;
  text-align:center;
  margin-left:15%;
`

export const ProductList = styled.FlatList`
  flex-basis:0;
  
  padding-top:10;
  padding-bottom:10;
  padding-left:10;
  padding-right:10;
  
`
