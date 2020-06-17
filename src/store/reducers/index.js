import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AuthReducer from "./AuthReducer";
import cartReducer from "./cartReducer";
import ShopReducer from './shopReducer/ShopReducer'
import DirectoryReducer from "./DirectoryReducer"
const persisteConfig={
  key:'root',storage,
  whilelist:['carte']
}
const rootReducer=combineReducers({
  auth: AuthReducer,
  form: formReducer,
  carte: cartReducer,
  directoryReducer:DirectoryReducer,
  shopReducer:ShopReducer
});

export default persistReducer(persisteConfig,rootReducer)