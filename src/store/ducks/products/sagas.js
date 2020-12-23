import {call,put} from "redux-saga/effects"

import api from "../../../services/api"
import {loadSuccessProducts} from "./actions"

export function* loadProducts(){
  try{
      const response  = yield call(api.get,"products")      
      yield put(loadSuccessProducts(response.data))
  }catch(err){
      console.log(err)
  }

}