import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    flex: 1,
    marginTop: 30,
  },
  txt: {
    fontSize: 16,
    padding: 10,
    color: 'rgb(36,22,74)',
  },
  txtTitle: {
    color: 'rgb(36,22,74)',
    padding: 10,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  img: {
    marginTop: 20,
    width: width,
  },
  footer: {
    backgroundColor: 'rgb(254,197,49)',
    display: 'flex',
    justifyContent: 'center',
  },
});
