import React from 'react';
import { useDispatch } from 'react-redux';
import { Container,TextTitle,TextPrice,ImageProduct } from './styles';
import {selectProducts} from "../../store/ducks/products/actions"

const ProductItem = ({image,price,title,id,navigation}) => {
  const dispatch = useDispatch()
  function openDetails(id){
    dispatch(selectProducts(id-1))        
    navigation.navigate("MoreInformation")
  }

  return(
  <Container onPress={()=>openDetails(id)} >
      <ImageProduct       
      resizeMode="contain"
      source={{uri:image}}/>
      <TextTitle>{title}</TextTitle>
      <TextPrice>R$ {price.toFixed(2)}</TextPrice>

  </Container>);
}

export default ProductItem;