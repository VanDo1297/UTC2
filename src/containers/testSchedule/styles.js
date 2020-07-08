import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  btnBack: {
    width: (width * 12) / 100,
    height: (width * 12) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    margin: 20,
  },
  image: {
    margin: 20,
    width: (width * 30) / 100,
    height: (width * 30) / 100,
  },
  searchScoreContainer: {
    marginTop: (height * 5) / 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 30,
    borderWidth: 2,
    width: (width * 80) / 100,
    height: 50,
    borderRadius: 10,
    borderColor: '#d35400',
    paddingLeft: 10,
    fontSize: 16,
  },
  buttonSubmit: {
    marginTop: 20,
    borderWidth: 1,
    width: (width * 40) / 100,
    height: 50,
    borderRadius: 10,
    borderColor: '#d35400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSubmit: {
    color: '#333',
    fontSize: 24,
  },
  listSchedule: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleSchedule: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemSchedule: {
    width: (width * 90) / 100,
    borderBottomWidth: 1,
    padding: 10,
  },
  itemText: {
    fontSize: 18,
  },
});
