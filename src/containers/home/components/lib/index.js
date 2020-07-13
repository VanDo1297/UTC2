import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

const EventComponent = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/thuvienbg.png')}
        style={styles.imgbg}>
        <View style={styles.text}>
          <Text style={styles.txt}>Thư viện ảnh và video</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default EventComponent;
