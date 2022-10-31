import firestore from '@react-native-firebase/firestore';

const GET_MOVIE_SEARCH = 'GET_MOVIE_SEARCH';
const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';
const SET_ERROR = 'SET_ERROR';
const RESET_ERROR = 'RESET_ERROR';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const RESET_MOVIES = 'RESET_MOVIES';
const GET_FAVORITES = 'GET_FAVORITES';
const SET_FAVORITES_LOADING = 'SET_FAVORITES_LOADING';

const getMoviesSearchURL = 'https://api.tvmaze.com/search/shows?q=';

//request to the server to search for movies by title-{value}
export const getMovieSearch = value => {
  return function (dispatch) {
    dispatch({type: RESET_ERROR});
    dispatch({type: SET_SEARCH_LOADING});

    fetch(`${getMoviesSearchURL} + ${value}`)
      .then(res => {
        //checking the success of the request
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: SET_ERROR,
            payload: 'Fetch error, check url address and repeat',
          });
        }
      })
      //saving received data
      .then(data => {
        const newData = data.map(item => item.show);
        dispatch({type: GET_MOVIE_SEARCH, payload: newData});
      })
      .catch(err => {
        dispatch({type: SET_ERROR, payload: err});
      });
  };
};

//getting list of saved movies from server
export const getFavorites = () => {
  return async function (dispatch) {
    dispatch({type: SET_FAVORITES_LOADING});
    try {
      const result = await firestore()
        .collection('favor')
        .doc('qLHRG4iw79DVoD0DTr00')
        .get();
      let data = result.data();
      dispatch({type: GET_FAVORITES, payload: data.data.favorites});
    } catch (err) {
      dispatch({type: GET_FAVORITES, payload: []});
      dispatch({type: SET_ERROR, payload: err});
    }
  };
};
//saving/deleting an item to the list of favorites in the local store
export const toggleFavorite = ({id, image, name, summary, rating}) => {
  const item = {id, image, name, summary, rating};
  return {type: TOGGLE_FAVORITE, payload: item};
};
//reset movie list
export const resetMovies = () => {
  return {type: RESET_MOVIES};
};
//save local favorites list to server
export const saveFavorites = () => {
  return async function (dispatch, getState) {
    dispatch({type: RESET_ERROR});
    const data = {favorites: getState().movie.favorites};
    try {
      firestore().collection('favor').doc('qLHRG4iw79DVoD0DTr00').update({
        data,
      });
    } catch {
      err => {
        dispatch({type: SET_ERROR, payload: err});
      };
    }
  };
};
