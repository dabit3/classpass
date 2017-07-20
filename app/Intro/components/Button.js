import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Button = ({ index, onPress }) => {
  let customButtonStyle = { backgroundColor: '#3b39da' }
  if (index !== 0) {
    customButtonStyle = {
      backgroundColor: 'transparent',
      borderColor: 'white',
    }
  }
  return (
    <TouchableHighlight
      underlayColor='#3b39da'
      onPress={onPress}
      style={[styles.button, customButtonStyle]}>
      <Text style={styles.buttonText}>START CLASSPASS</Text>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    height: 46,
    width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default Button;
