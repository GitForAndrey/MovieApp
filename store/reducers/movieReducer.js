const initialState = {
  movies: [],
  favorites: [],
  statusMovies: '',
  statusFavorites: '',
  error: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_SEARCH': {
      return {
        ...state,
        movies: action.payload,
        statusMovies: 'success',
      };
    }
    case 'GET_FAVORITES': {
      return {
        ...state,
        favorites: action.payload,
        statusFavorites: 'success',
      };
    }
    //saving/deleting an item to the list of favorites in  store
    case 'TOGGLE_FAVORITE': {
      const movie = action.payload;
      const likedPost = state.favorites.find(item => item.id === movie.id);
      if (likedPost) {
        newFavorites = state.favorites.filter(item => item.id !== movie.id);
        return {
          ...state,
          favorites: newFavorites,
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, movie],
        };
      }
    }

    case 'SET_SEARCH_LOADING': {
      return {
        ...state,
        statusMovies: 'loading',
      };
    }
    case 'SET_FAVORITES_LOADING': {
      return {
        ...state,
        statusFavorites: 'loading',
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
        status: 'error',
      };
    }
    case 'RESET_MOVIES': {
      return {
        ...state,
        movies: [],
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
