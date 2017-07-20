import React from 'react';
import { Text } from 'react-native';

const Title = ({ index }) => {
  const color = index === 0 ? 'black' : 'white';
  return (
    <Text
      style={{ fontWeight: 'bold', color }}
    >
      CLASSPASS
    </Text>
  )
}

export default Title;
