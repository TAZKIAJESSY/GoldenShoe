const initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "category/categoryFetched": {
      return { ...state, categories: action.payload };
    }
    default: {
      return state;
    }
  }
}
