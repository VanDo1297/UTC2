import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: (height * 40) / 100,
    width: width,
    // backgroundColor: 'red',
  },
  title: {
    height: (height * 5) / 100,
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  bgTitle: {
    backgroundColor: 'yellow',
    width: width,
    height: 30,
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    textTransform: 'uppercase',
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
  },
  events: {
    padding: 10,
    width: width,
  },
  more: {
    flexDirection: 'row',
  },
  item: {
    width: width,
    height: 140,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  imageItem: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  timeItem: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    opacity: 0.5,
  },
  titleItem: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});
