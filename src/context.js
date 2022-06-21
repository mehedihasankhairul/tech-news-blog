// step for Context api

// context creation
// provider
// consumer

import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const API = "https://hn.algolia.com/api/v1/search?";


const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });


    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "SET_DATA",
        payload: {
          hits: data.hits, nbPages: data.nbPages, page: data.page,
        }
      });
    } catch (error) {
    }
  };


  // api search query
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  // remove post 
  const removePost = (id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  }

  //search query
  const searchNews = (query) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: query,
    });
  }

  // pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  }

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  }


  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchNews, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  )

};

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};


export { AppContext, AppProvider, useGlobalContext };
