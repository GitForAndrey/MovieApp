import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// component for displaying Text when there are no selected or found movies

export const EmptySearch = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
