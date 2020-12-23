import styled from "styled-components/native"



export const Container = styled.View`
  flex:1;  
  background-color:#FBFBFB
  padding-top:10;  
  padding-bottom:10;  
  padding-left:2;  
  padding-right:2;  
` 

export const ContainerImage = styled.View`
align-items:center;
justify-content:center;
`

export const ImageProduct = styled.Image`

  width:300;
  height:380;
  border-radius:6;
  margin-top:20;
  margin-bottom:20;
`

export const TextTitle = styled.Text`
  font-size:  24;
  font-weight:bold;
  text-align:center;
  margin-bottom:15;
`
export const TextPrice = styled.Text`
  font-size:16;
  font-weight:bold;
  text-align:center;
  margin-bottom:10;
`

export const TextHeaderDescription= styled.Text`
  font-size:18;
  font-weight:bold;
  text-align:left;
  margin-bottom:5
  padding-left:5;

`

export const TextDescription =  styled.Text`
  font-size:12;
  text-align:justify;
  color:#BDBDBD;
  padding-left:5;
  padding-right:5;
  margin-bottom:10%;

`

export const ButtonArea = styled.View`
align-items:center;
justify-content:center;
`

export const ButtonBuyArea = styled.TouchableOpacity`
width:190;
height:40;
  background-color:#F44336;
  margin-bottom:10;
  border-radius:6;
  align-items:center;
justify-content:center;

`

export const ButtonBuyText = styled.Text`
  font-size:18;
  font-weight:bold;
  color:#fff;
  text-align:center;
`

export const ButtonAddCartArea = styled.TouchableOpacity`

align-items:center;
justify-content:center;
`

export const ButtonAddCartText = styled.Text`
  font-size:14;
  color:#F44336;
  text-align:center;

`
