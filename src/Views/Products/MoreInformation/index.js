import React, { useState } from 'react';
import {ScrollView} from "react-native"
import { useDispatch, useSelector } from 'react-redux';

import { Container, ImageProduct, TextTitle,TextPrice,TextHeaderDescription,ButtonAddCartArea,TextDescription, ButtonAddCartText,ButtonArea,ButtonBuyArea,ButtonBuyText,ContainerImage } from './styles';

import {buyProduct,addProduct,addAgainProduct} from "../../../store/ducks/cart/actions"

const MoreInformation = ({navigation}) => {

  const product = useSelector(state=>state.products.selectedProduct)

  const [quantity,setQuantity]  = useState(0)

  const dispatch = useDispatch()

   async function handleClickToBuyProduct(){    
    await dispatch(buyProduct(product))
    navigation.navigate("Cart")
  }

  function handleClickToAddProduct(count){  
    dispatch(addProduct(product,count))    
  }

  function handleClickToAddAgainProduct(count){    
    dispatch(addAgainProduct(product,count))    
  }

  function verifyAddProduct(){
    if(quantity==0)setQuantity(quantity+2)
    else setQuantity(quantity+1)
    
    if(quantity==0){
           
      handleClickToAddProduct(quantity+1)}
    else {handleClickToAddAgainProduct(quantity)}
  }
  
  return(
      <>
    <Container>
        <ScrollView>
          <ContainerImage>
          <ImageProduct 
          source={{uri:product.image}}
          />

          <TextTitle>{product.title}</TextTitle>
          <TextPrice>R$ {product.price}</TextPrice>
          </ContainerImage>
          <TextHeaderDescription>Descrição</TextHeaderDescription>

          <TextDescription>{product.description}</TextDescription>

          <ButtonArea>
            <ButtonBuyArea onPress={()=>handleClickToBuyProduct()}>
              <ButtonBuyText>COMPRAR</ButtonBuyText>
            </ButtonBuyArea>

            <ButtonAddCartArea onPress={()=>verifyAddProduct()}>
              <ButtonAddCartText >
                ADICIONAR AO CARRINHO
              </ButtonAddCartText>      
            </ButtonAddCartArea>
    

          </ButtonArea>

        </ScrollView>
    </Container>
      </>
);
}

export default MoreInformation;