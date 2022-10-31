import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/const';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {saveFavorites, toggleFavorite} from '../store/action-creator';

// Like/Unlike icon display component accepts
//  Item- this is the movie object isFavorite - true/false whether it is in favorites
export const Like = ({item, isFavorite}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          //toggleFavorite Adds or removes a movie from favorites
          dispatch(toggleFavorite(item));

          //saveFavorites saves the value on the server
          dispatch(saveFavorites());
        }}>
        <Icon
          name="heart"
          size={34}
          color={isFavorite ? COLORS.red : COLORS.gray}
        />
      </TouchableOpacity>
    </View>
  );
};
