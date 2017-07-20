import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import SliderIntro from './SliderIntro';
import Signup from './Signup';

const routeConfig = {
  SliderIntro: { screen: SliderIntro },
  Signup: { screen: Signup },
}

const IntroNav = StackNavigator(routeConfig)

export default IntroNav;
