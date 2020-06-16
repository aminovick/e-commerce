import { TOGGLE_ICON, ADD_ITEMS } from "../Type";
import { CardUtil } from "./CardUtil";
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
    default:
      return state;
  }
};

export default cartReducer;
