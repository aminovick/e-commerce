import { SING_IN, SING_OUT } from "../Type";
export const signIn = (id) => {
  return {
    type: SING_IN,
    payload: id
  };
};

export const signOut = () => {
  return {
    type: SING_OUT
  };
};
