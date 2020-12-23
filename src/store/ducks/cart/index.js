import {INITIAL_STATE,CartTypes} from "./types"


export default function cart(state=INITIAL_STATE,action){
  switch(action.type){
    case CartTypes.ADD_PRODUCT:    
      return {...state,products:[...state.products,{productId:action.payload.newProduct.id,
    quantity:action.payload.quantity }]}

    case CartTypes.ADD_AGAIN_PRODUCT:
      let newProducts = state.products.map(item=>{
        if(item.productId===action.payload.newProduct.id){
          item.quantity=action.payload.quantity          
          
      }
      return item
      })

      return {...state,products:[...newProducts]}
    
    
    case CartTypes.REMOVE_PRODUCT:
      
      return {...state,products:state.products.filter(product=>{return product.productId!=action.payload.id})}
    
    case CartTypes.BUY_PRODUCTS: return {...state,products:[]}

    case CartTypes.CLEAN_CART: return {...state,products:[]}

    case CartTypes.BUY_PRODUCT: return {...state,products:[...state.products,{productId:action.payload.product.id,quantity:1}]}


    case CartTypes.AU_QUANTITY_PRODUCT_CART:
      

      return {...state,products:state.products.map(item=>{
        if(item.productId===action.payload.id){
          item.quantity=action.payload.quantity          
          
      }
      return item
      })}
    


    case CartTypes.DEC_QUANTITY_PRODUCT_CART:
      return {...state,products:state.products.map(item=>{
        if(item.productId===action.payload.id){
          item.quantity=action.payload.quantity          
          
      }
      return item
      })}
    


    default:return {...state}
  }
}