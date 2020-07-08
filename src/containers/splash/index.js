import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import Logo from '../../assets/images/logo.png';
import {styles} from './styles';
const SplashContainer = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={Logo} style={styles.image} />
    </View>
  );
};
export default SplashContainer;
