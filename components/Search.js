import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/const';

// the search component accepts
// handleSearch-func callback function that receives data and returns it to the component above and
// value of input
export const Search = ({handleSearch, value}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        onChangeText={e => handleSearch(e)}
        value={value}
      />
      <View>
        <Icon name="search-outline" size={24} color={COLORS.main} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.main,
  },

  input: {
    height: 36,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '90%',
    borderRadius: 40,
    fontSize: 20,
  },
});
