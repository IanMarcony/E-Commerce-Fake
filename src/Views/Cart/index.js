import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {cleanCart,buyAllProduct} from "../../store/ducks/cart/actions"

import CartItem from "../../components/CartItem"

import { Container,CartList, ButtonAddProductText,ButtonCleanCartArea,ButtonArea,ButtonCleanCartText,ButtonAddProduct,ButtonFinishText,ButtonFinishArea,TextWithoutList } from './styles';

const Cart = ({navigation}) => {
    const cart = useSelector(state=>state.cart.products)
    console.log(cart)

    const dispatch = useDispatch()

    function handleClickToAddProduto(){
        navigation.navigate("Produtos")
    }

    function handleClickToFinishShop() { 
      if(cart.length==0)return alert("Você precisa adicionar ou comprar algo!")

        dispatch(buyAllProduct())
        navigation.navigate("Produtos")

        return alert("Obrigado por comprar nossos produtos! Volte Sempre!" )
     }

      function handleClickToCleanCart () {

      dispatch(cleanCart())
       }

  return( <Container>
       <ScrollView >
          {cart.length>0?(
 <CartList
 data={cart}
 keyExtractor={(item)=>{              
  item.productId}}      
  style={{flexBasis:0}}           
 renderItem={({item})=>
 <CartItem id={item.productId} quantity={item.quantity}  />}
/>


          ):(


            <TextWithoutList>SEM PRODUTOS NO CARRINHO!</TextWithoutList>
          )}


          <ButtonAddProduct onPress={()=>handleClickToAddProduto()}>
            <ButtonAddProductText>
              ADICIONAR PRODUTO
            </ButtonAddProductText>
          </ButtonAddProduct>

          <ButtonArea>
            <ButtonFinishArea onPress={()=>handleClickToFinishShop()}>
              <ButtonFinishText>
                FINALIZAR
              </ButtonFinishText>
            </ButtonFinishArea>
            <ButtonCleanCartArea onPress={()=>handleClickToCleanCart()}>
              <ButtonCleanCartText>
                LIMPAR CARRINHO
              </ButtonCleanCartText>

            </ButtonCleanCartArea>

          </ButtonArea>




       </ScrollView>

  </Container>);
}

export default Cart;