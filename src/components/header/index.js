import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Pannel from '../../assets/images/pannel.png';
import {styles} from './styles';
const HeaderComponents = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.handleClickhamburger}
        style={styles.hamburger}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>
      <Image source={Pannel} style={styles.image} />
    </View>
  );
};
export default HeaderComponents;
