import {INITIAL_STATE,ProductsTypes} from "./types"

export default function products(state=INITIAL_STATE,action){  
  switch(action.type){
    case ProductsTypes.LOAD_REQUEST:return {...state}
    case ProductsTypes.LOAD_SUCCESS:return {...state,      
      data:action.payload.data}
    case ProductsTypes.FILTER_PRODUCTS:
      let {data} = state
      return {
        ...state,
        data:data.filter(product=>{return product.category==action.payload.category})
      }

    case ProductsTypes.SELECT_PRODUCT:
      let id = action.payload.id
    let product = state.data[id]  

    
    return {...state,
          
        selectedProduct:product}
    default:
      return {...state}

  }

}