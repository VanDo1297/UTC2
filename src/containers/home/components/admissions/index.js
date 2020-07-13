import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

const EventComponent = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/bgtuyensinh.png')}
        style={styles.imgbg}>
        <View style={styles.text}>
          <Text style={styles.txt}>Tuyển sinh</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default EventComponent;
