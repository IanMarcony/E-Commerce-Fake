import React,{useEffect} from 'react';
import {Text} from 'react-native'
import {useSelector,useDispatch} from "react-redux"
import ProductItem from "../../components/ProductItem"
import {loadRequestProducts} from "../../store/ducks/products/actions"


import { Container, ProductList,TextWithoutList} from './styles';


const Products = ({navigation}) => {
  const products= useSelector(state=>state.products)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(loadRequestProducts())
  },[])

  return (
    <>
    
  <Container>      
      {products.data.length>0?(
      <ProductList
        data={products.data}
        keyExtractor={(item)=>item.id}
        style={{flexBasis:0}}        
        numColumns={2}
        renderItem={({item})=>
        <ProductItem    
            navigation={navigation}  
            id={item.id}
            image={item.image} 
            title={item.title}
            price={item.price}
         />}
      />):(
        
        <TextWithoutList>Carregando...</TextWithoutList>
      )}
  </Container>
  </>
  );
}

export default Products;