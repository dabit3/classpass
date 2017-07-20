import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Title from './components/Title';
import Footer from './components/Footer';

const { width, height } = Dimensions.get('window');

class SliderIntro extends PureComponent {
  static navigationOptions = {
    header: null,
  }
  state = {
    index: 0,
  }
  onSnapToItem = (index) => {
    console.log({ index });
    this.setState({
      index,
    })
  }
  render() {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.titleStyle}>
          <Title index={this.state.index} />
        </View>
        <Carousel
          onSnapToItem={this.onSnapToItem}
          inactiveSlideScale={1}
          sliderWidth={width}
          sliderHeight={height}
          itemWidth={width}
          itemHeight={height}
        >
          <Slide1 />
          <Slide2 />
        </Carousel>
        <Footer
          onPress={() => this.props.navigation.navigate('Signup')} activeIndex={this.state.index}
        />
      </View>
    )
  }
}
const Slide1 = () => (
  <Image
    source={require('./images/yoga1.jpg')}
    style={[styles.slideContainer, styles.slide1]}>
    <View>
    </View>
    <View>
    </View>
  </Image>
)
const Slide2 = () => (
  <View style={styles.slideContainer}>
    <Text>Slide2</Text>
  </View>
)
const styles = StyleSheet.create({
  titleStyle: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width
  },
  carouselContainer: {
    flex: 1,
  },
  slideContainer: {
    width,
    height,
  },
  slide1: {
    backgroundColor: 'white'
  }
})

export default SliderIntro;
