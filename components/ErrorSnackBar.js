import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/const';
import SnackBar from 'rn-snackbar-component';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ErrorSnackBar = ({isError, text}) => {
  const dispatch = useDispatch();
  return (
    <SnackBar
      visible={isError}
      message={
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{text}</Text>
          <TouchableOpacity
            style={{padding: 15}}
            onPress={() => {
              dispatch({type: 'RESET_ERROR'});
            }}>
            <Icon name="close" size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
      }
      autoHidingTime={0}
      native={false}
      position="top"
    />
  );
};
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.red,
    padding: 15,
    borderRadius: 8,
  },

  errorText: {color: '#fff', fontSize: 20, width: '80%'},
});
