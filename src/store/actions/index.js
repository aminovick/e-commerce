import { SING_IN, SING_OUT, TOGGLE_ICON } from "../Type";
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
