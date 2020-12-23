
const ProductsTypes={
  LOAD_REQUEST:"@products/LOAD_PRODUCTS",//LoadProducts
  LOAD_SUCCESS:"@products/LOAD_SUCCESS",
  FILTER_PRODUCT:"@products/FILTER_PRODUCT",
  SELECT_PRODUCT:"@products/SELECT_PRODUCT",

}

const INITIAL_STATE={
  data:[],
  selectedProduct:{}
}


export  {ProductsTypes,INITIAL_STATE}