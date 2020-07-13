import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  carousel: {
    height: 150,
  },
  search: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10,
    height: 50,
    marginBottom: 10,
  },
  txtSearchText: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#7158e2',
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
  },
  txtSearch: {
    fontSize: 16,
    padding: 10,
  },
  imageSlider: {
    width: width,
    height: (width * 25) / 100,
  },
  hamburger: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 9,
  },
  line: {
    backgroundColor: 'black',
    width: 25,
    height: 3,
    margin: 3,
  },
});
