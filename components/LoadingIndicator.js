import React from 'react';
import {Text, ActivityIndicator, View, StyleSheet} from 'react-native';
import {COLORS} from '../constants/const';

//data loading indicator component
export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.main} />
      <Text>search...</Text>
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
