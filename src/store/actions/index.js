import {
  SING_IN,
  SING_OUT,
  TOGGLE_ICON,
  ADD_ITEMS,
  DELETE_ITEM,
  REMOVE_ITEM,
} from "../Type";
export const signIn = (id) => {
  return {
    type: SING_IN,
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: SING_OUT,
  };
};

export const toggleIcon = () => {
  return {
    type: TOGGLE_ICON,
  };
};
export const addItems = (items) => {
  return {
    type: ADD_ITEMS,
    payload: items,
  };
};
export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};
export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
