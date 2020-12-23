import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Wrapper, InnerContainer, BadgeTxt } from './styles';

export default IconCart = ({navigation}) => {
  const cart = useSelector(state => state.cart);  

  console.log(cart)
  let badgeCount = 0;
  cart.products.map(item => {return badgeCount+=item.quantity});

  return (
    <View>
    
    <Wrapper onPress={()=>navigation.navigate("Cart")}>
    <Icon
    name="cart-outline"
    size={24}
    color="white"   />
      { badgeCount > 0 ? (
        <InnerContainer>
          <BadgeTxt>{badgeCount}</BadgeTxt>
        </InnerContainer>
      ) : null}
    </Wrapper>
    </View>
  );
};