import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 50,
    width: width,
    padding: 10,
  },
  img: {
    flexDirection: 'column',
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
    marginTop: 10,
  },
});
