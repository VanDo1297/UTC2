import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Pannel from '../../assets/images/pannel.png';
import {styles} from './styles';
const HeaderComponents = props => {
  return (
    <View style={styles.container}>
      <Image source={Pannel} style={styles.image} />
    </View>
  );
};
export default HeaderComponents;
