import {ProductsTypes} from "./types"


export function loadRequestProducts(){
  return {
    type: ProductsTypes.LOAD_REQUEST,
    
  }
}
export function loadSuccessProducts(data){
return {
  type: ProductsTypes.LOAD_SUCCESS,
  payload:{
    data,
    
  }
}
}

export function filterProducts(category){
  return {
    type: ProductsTypes.FILTER_PRODUCT,
    payload:{
      category
      
    }
  }
  }

  export function selectProducts(id){
    return {
      type: ProductsTypes.SELECT_PRODUCT,
      payload:{
        id        
      }
    }
  }