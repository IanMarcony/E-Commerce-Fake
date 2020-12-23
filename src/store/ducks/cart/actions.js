import {CartTypes} from "./types"

export function addProduct(newProduct,quantity){
  return {
    type:CartTypes.ADD_PRODUCT,
    payload:{newProduct,quantity}
  }
}

export function addAgainProduct(newProduct,quantity){
  return {
    type:CartTypes.ADD_AGAIN_PRODUCT,
    payload:{newProduct,quantity}
  }
}

export function removeProduct(id){
  return {
    type:CartTypes.REMOVE_PRODUCT,
    payload:{id}
  }
}
export function cleanCart(){
  return {
    type:CartTypes.CLEAN_CART,
  }
}

export function buyProduct(product){
  return {
    type:CartTypes.BUY_PRODUCT,  
    payload:{
product
    }  
  }
}
export function buyAllProduct(){
  return {
    type:CartTypes.BUY_PRODUCTS,    
  }
}

export function decQuantityProduct(id,quantity) { 
  return {
    type:CartTypes.DEC_QUANTITY_PRODUCT_CART,    
    payload:{
      id,quantity
     }
  }

 }
 export function auQuantityProduct(id,quantity) { 
   return {
     type:CartTypes.AU_QUANTITY_PRODUCT_CART,    
     payload:{
      id,quantity
     }
   }
 
  }