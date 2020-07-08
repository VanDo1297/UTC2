import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    width: (width * 80) / 100,
    height: (height * 6) / 100,
    resizeMode: 'cover',
  },
  hamburger: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  line: {backgroundColor: 'black', width: 25, height: 3, margin: 3},
});
