const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_DATA":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        page: action.payload.page,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((post) => post.objectID !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "PREV_PAGE":
      let pageNumber = state.page;
      if (pageNumber <= 0) {
        pageNumber = pageNumber - 1;
      }
      else {
        return {
          ...state,
          page: state.page - 1,
        };
      }

    default:
      return state;
  }


}
export default reducer;