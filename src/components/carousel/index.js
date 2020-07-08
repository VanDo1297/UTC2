import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel1 from '../../assets/images/carousel1.jpg';
import Carousel2 from '../../assets/images/carousel2.jpg';
import Carousel3 from '../../assets/images/carousel3.jpg';

import {styles} from './styles';

const HeaderComponents = props => {
  return (
    <Swiper autoplay style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Image source={Carousel1} style={styles.item} />
      </View>
      <View style={styles.slide}>
        <Image source={Carousel2} style={styles.item} />
      </View>
      <View style={styles.slide}>
        <Image source={Carousel3} style={styles.item} />
      </View>
    </Swiper>
  );
};
export default HeaderComponents;
