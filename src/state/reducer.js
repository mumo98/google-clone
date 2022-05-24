// this defines the intial state of the data layer
// it is ussuly an object that is null and immeaditely u search a word eg "kenya", the "term which was inittialy null"...absorbs the data

export const initialState = {
  term: null,
};

// to chnage the data layer, an action to dispath is set here
// whwreby the action type is set as shown
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// this is the reducer which listens for all dispatched actions
// the state is the data layer
// the action is the action dispatced into the dat layer
const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
