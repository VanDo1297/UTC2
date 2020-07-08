import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: width,
    height: 150,
    resizeMode: 'cover',
  },
});
