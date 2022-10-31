import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingIndicator} from '../components/LoadingIndicator';
import {MovieCard} from '../components/MovieCard';
import {Search} from '../components/Search';
import {EmptySearch} from '../components/EmptySearch';
import {getMovieSearch, resetMovies} from '../store/action-creator';
import {ErrorSnackBar} from '../components/ErrorSnackBar';

const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.movies);
  const favorites = useSelector(state => state.movie.favorites);
  const status = useSelector(state => state.movie.statusMovies);
  const error = useSelector(state => state.movie.error);
  const [search, setSearch] = useState('');

  //listen for a change in the search string and execute a request to the server dispatch(getMovieSearch(value))
  //or clear the array of movies dispatch(resetMovies());
  const handleSearch = value => {
    setSearch(value);
    if (value.length >= 2) {
      dispatch(getMovieSearch(value));
    } else {
      dispatch(resetMovies());
    }
  };
  //check if there is a movie in the favorites array and pass the value to the movie component
  const renderItem = ({item}) => {
    const likedPost = favorites.find(el => el.id === item.id);
    return <MovieCard item={item} isFavorite={likedPost} />;
  };
  return (
    <View style={{flex: 1}}>
      {/* error component will display an error in case of data loading error */}
      <ErrorSnackBar isError={!!error} text={error} />
      <Search handleSearch={handleSearch} value={search} />
      {/* check for an empty array of movies and no loading to display the component EmptySearch*/}
      {movies.length === 0 && status != 'loading' ? (
        <EmptySearch text={'No movies found'} />
      ) : null}
      {status === 'loading' ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{marginBottom: 200}}></View>}
        />
      )}
    </View>
  );
};

export default Main;
