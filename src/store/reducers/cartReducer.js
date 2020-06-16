import { TOGGLE_ICON, ADD_ITEMS, DELETE_ITEM, REMOVE_ITEM } from "../Type";
import _ from "lodash";
import { CardUtil, removeItem } from "./CardUtil";
const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ICON:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: CardUtil(state.items, action.payload),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
