const CartTypes={
  ADD_PRODUCT:"@cart/ADD_PRODUCT",
  ADD_AGAIN_PRODUCT:"@cart/ADD_AGAIN_PRODUCT",
  REMOVE_PRODUCT:"@cart/REMOVE_PRODUCT",
  BUY_PRODUCTS:"@cart/BUY_PRODUCTS",
  BUY_PRODUCT:"@cart/BUY_PRODUCT",
  CLEAN_CART:"@cart/CLEAN_CART",
  DEC_QUANTITY_PRODUCT_CART:"@cart/DEC_QUANTITY_PRODUCT_CART",
  AU_QUANTITY_PRODUCT_CART:"@cart/AU_QUANTITY_PRODUCT_CART",
}

const INITIAL_STATE ={
  products:[]
}

export  {CartTypes,INITIAL_STATE}