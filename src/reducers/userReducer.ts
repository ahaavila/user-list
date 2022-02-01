import { GET_USERS } from '../actions';

const initialState = {
  users: [],
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action: any) => {
  const { type, users } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users,
      };
    default:
      return state;
  }
};

export default userReducer;
