import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const dots = [0, 1];

import Button from './Button';

const Footer = ({ activeIndex, onPress }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.dotsContainer}>
        {
          dots.map((item, index) => {
            const opacity = index === activeIndex ? 1 : 0.3;
            const dotColor = `rgba(0, 0, 0, ${opacity})`;
            return (
              <View
                key={index}
          style={[styles.dot, { backgroundColor: dotColor }]} />
            )
          })
        }
      </View>
      <Button onPress={onPress} index={activeIndex} />
    </View>
  )
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    width: 26,
    justifyContent: 'space-around'
  },
  footerContainer: {
    justifyContent: 'space-around',
    position: 'absolute',
    height: 140,
    bottom: 0,
    left: 0,
    width,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
})

export default Footer;
