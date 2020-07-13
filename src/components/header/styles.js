import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'relative',
    marginLeft: 50,
  },
  image: {
    width: (width * 80) / 100,
    height: (height * 6) / 100,
    resizeMode: 'cover',
  },
});
