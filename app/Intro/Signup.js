import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderTitle = () => (
  <View>
    <Text
      style={{ fontSize: 20, color: 'white' }}
    >3-Day Class Plan</Text>
    <Text style={{color: 'white'}}>San Francisco Bay Area</Text>
  </View>
)

class SignUp extends React.Component {
  static navigationOptions = {
    headerTintColor: '#20c8b1',
    headerStyle: {
      backgroundColor: '#313649'
    },
    headerTitle: <HeaderTitle />
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <View style={styles.button}>
              <View style={styles.iconStyle}>
                <Icon size={16} name='facebook' color='white' />
              </View>
              <View style={styles.buttonTitle}>
                <Text style={styles.buttonText}>SIGN UP WITH FACEBOOK</Text>
              </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  buttonTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 15
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#415f9d',
    justifyContent: 'center',
    height: 50,
    borderRadius: 4,
  }
})

export default SignUp;