import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieCard} from '../components/MovieCard';
import {Search} from '../components/Search';
import {EmptySearch} from '../components/EmptySearch';

//favorites page where movies are displayed and filtered
const Favorite = () => {
  const favorites = useSelector(state => state.movie.favorites);
  const status = useSelector(state => state.movie.statusFavorites);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(favorites);

  useEffect(() => {
    //the movie filter function filters the favorites array based
    //on the string and returns a new array or returns the original value
    if (search.length >= 2) {
      const newArray = favorites.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      setData(newArray);
    } else {
      setData(favorites);
    }
  }, [favorites, search]);

  //function that listens for changes to the search string
  const handleSearch = value => {
    setSearch(value);
  };
  const renderItem = ({item}) => {
    //check if there is a movie in the favorites array and pass the value to the movie component
    const likedPost = favorites.find(el => el.id === item.id);
    return <MovieCard item={item} isFavorite={likedPost} />;
  };
  return (
    <View style={{flex: 1}}>
      <Search handleSearch={handleSearch} value={search} />
      {/* check for an empty array of movies and no loading to display the component EmptySearch*/}
      {data.length === 0 && status != 'loading' ? (
        <EmptySearch text={'No selected items'} />
      ) : null}
      {status === 'loading' ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{marginBottom: 200}}></View>}
        />
      )}
    </View>
  );
};

export default Favorite;
