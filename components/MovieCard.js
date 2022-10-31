import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {COLORS, SIZES} from '../constants/const';
import {Like} from './Like';

//single movie card
export const MovieCard = ({item, isFavorite}) => {
  //imageUri check if there is a picture, if not, put a template
  const imageUri =
    item.image != null
      ? item.image.medium
      : 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png';
  return (
    <View style={styles.movieCard}>
      <View style={styles.preview}>
        <Image
          style={styles.preview_image}
          source={{
            uri: imageUri,
          }}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textContent_title} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.textContent_description} numberOfLines={2}>
          {item.summary}
        </Text>
      </View>
      <View style={styles.right_content}>
        <Like item={item} isFavorite={isFavorite} />
      </View>
      <Text style={styles.rating_text}>
        Rating: {item.rating.average ? item.rating.average : 0}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    position: 'relative',
    width: SIZES.width,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.main,
    paddingHorizontal: 15,
  },
  preview: {
    paddingRight: 15,
  },
  preview_image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  textContent: {flex: 1},
  textContent_title: {
    fontSize: SIZES.h1,
  },
  right_content: {
    width: 60,
    alignItems: 'center',
  },

  rating_text: {
    position: 'absolute',
    bottom: 5,
    right: 15,
    fontSize: 14,
  },
});
