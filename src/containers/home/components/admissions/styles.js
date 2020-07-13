import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flex: 1,
    margin: 10,
  },
  imgbg: {
    width: (width * 95) / 100,
    height: (height * 25) / 100,
    margin: 10,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 50,
    backgroundColor: 'rgba(155, 89, 182,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
