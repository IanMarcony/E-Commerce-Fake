import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {removeProduct,decQuantityProduct,auQuantityProduct} from "../../store/ducks/cart/actions"

 import Icon from "react-native-vector-icons/Ionicons"
import { Container, ImageProduct, AboutArea,TitleArea, TextTitle,IconAreaButton,MoreArea,CategoryQuantityArea,QuantityArea,CategoryText,QuantityText,ButtonQuantityArea,PriceText } from './styles';

const CartItem = ({id,quantity}) => {
  const product = useSelector(state=>state.products.data[id-1])
  const dispatch = useDispatch()
  const [subTotal,setSubTotal]=useState(product.price*quantity)

  
  

  
  function handleClickToDelete() {
    dispatch(removeProduct(id))
  }
  
  function handleClickToDec() { 

    if(quantity==0)return handleClickToDelete()

    
    
    dispatch(decQuantityProduct(id,quantity-1))
    setSubTotal(product.price*(quantity-1))
  }  
  
  function handleClickToAu() { 
         

    dispatch(auQuantityProduct(id,quantity+1))
    setSubTotal(product.price*(quantity+1))
    

  }
  return( 
  <Container >
    <ImageProduct
      source={{uri:product.image}}/>
    <AboutArea>
      <TitleArea>
        <TextTitle>{product.title}</TextTitle>
       <IconAreaButton onPress={()=>handleClickToDelete()}>
       <Icon name="trash"
          size={30}/>
       </IconAreaButton>
      </TitleArea>

      <MoreArea>
        <CategoryQuantityArea>
          <CategoryText>Categoria: {product.category}</CategoryText>
          <QuantityArea>
            <QuantityText>Quantidade:{quantity}</QuantityText>
            <ButtonQuantityArea onPress={()=>handleClickToDec()}>
              <Icon name="remove-outline"
              size={24}
              />
            </ButtonQuantityArea>

            <ButtonQuantityArea onPress={()=>handleClickToAu()}>
              <Icon name="add-outline"
              size={24}
              />
            </ButtonQuantityArea>
            <PriceText>R$ {subTotal.toFixed(2)
}</PriceText>
          </QuantityArea>          
        </CategoryQuantityArea>
      </MoreArea>


    </AboutArea>
    
  </Container>);
}

export default CartItem;