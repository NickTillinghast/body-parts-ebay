const intitalState = {
  user: null
};

export const SET_USER = "SET_USER";

export default function reducer(state = intitalState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    default:
      return state;
  }
}
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
