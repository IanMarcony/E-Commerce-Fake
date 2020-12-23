import React from "react"
import {StatusBar} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IconCart from "../components/IconCart"


import Products from "../Views/Products"
import MoreInformation from "../Views/Products/MoreInformation"
import Cart from "../Views/Cart"



const Stack = createStackNavigator()

function NavigationApp(){

  return(
    <NavigationContainer>
      <StatusBar
      barStyle = "light-content"
      hidden = {false}
      backgroundColor = "#DB3B2E"
      translucent = {false}
      networkActivityIndicatorVisible = {true}
    
    />  
        <Stack.Navigator
          initialRouteName="Produtos"
          screenOptions={{
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#F44336"},
            headerTitleAlign:"center",   
            headerTitleStyle:{
              fontWeight:"bold"
            },       
            
          }}
        >
          <Stack.Screen name="Produtos" component={Products}
            options={({navigation})=>({
              headerRight:()=>(<IconCart navigation={navigation} />
            )})}
          />
          <Stack.Screen name="MoreInformation" component={MoreInformation} options={({navigation})=>(
            {
              title:"",
              headerRight:()=>(<IconCart navigation={navigation}/>)
              }
          )}/>
          <Stack.Screen name="Cart" component={Cart} options={{title:"Carrinho de Compras"}} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default NavigationApp