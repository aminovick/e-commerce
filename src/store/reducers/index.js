import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  carte: cartReducer,
});
