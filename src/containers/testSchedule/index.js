import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/images/logo.png';
import {styles} from './styles';
// import AsyncStorage from '@react-native-community/async-storage';

const fakeData = [
  {
    id: 'aaa',
    name: 'Sche1',
    mssv: 'ms1',
    lop: 'lop1',
    ngayThi: 'ngay thi',
    phongThi: 'phong thi',
    lopHocPhan: 'lop hoc phan',
  },
  {
    id: 'aaa2',
    name: 'Sche2',
    mssv: 'ms1',
    lop: 'lop2',
    ngayThi: 'ngay thi2',
    phongThi: 'phong thi2',
    lopHocPhan: 'lop hoc phan2',
  },
  {
    id: 'aaa3',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa31',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa32',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa33',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa34',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa35',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa36',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa367',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa368',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
  {
    id: 'aaa369',
    name: 'Sche3',
    mssv: 'ms1',
    lop: 'lop3',
    ngayThi: 'ngay thi3',
    phongThi: 'phong thi3',
    lopHocPhan: 'lop hoc phan3',
  },
];

const SplashContainer = props => {
  useEffect(() => {
    // TODO : check data to storegare
    _retrieveData();
    // TODO : with case have data => redirect to ListSchedule
  });
  const _retrieveData = async () => {
    try {
      // const value = await AsyncStorage.getItem('Schedule');
      // if (value !== null) {
      //   // We have data!!
      //   console.log(value);
      // }
    } catch (error) {
      // Error retrieving data
    }
  };

  const [isError, setError] = useState(false);
  const [isSearch, setSearch] = useState(true);

  const handleBack = () => {
    props.navigation.navigate('Home');
  };

  const handleBackToSubmit = () => {
    setSearch(true);
    // TODO : redirect to Submit
  };
  const handleSubmit = () => {
    setSearch(false);
    //  TODO : call API get DATA
    //  TODO : with case fetch API success => redirect to ListSchedule with response data and save data to storegare
    //  TODO : with case fetch API failure => show error
  };

  const renderItemSchedule = item => {
    return (
      <View style={styles.itemSchedule}>
        <Text style={styles.itemText}>
          <Text style={{fontWeight: 'bold'}}>Name: </Text>
          {item.name}
        </Text>
        <Text style={styles.itemText}>
          <Text style={{fontWeight: 'bold'}}>Date: </Text> {item.ngayThi}
        </Text>
        <Text style={styles.itemText}>
          <Text style={{fontWeight: 'bold'}}>Location: </Text> {item.phongThi}
        </Text>
      </View>
    );
  };
  const SearchSchedule = () => {
    return (
      <>
        <TouchableOpacity onPress={handleBack} style={styles.btnBack}>
          <Icon name="angle-left" size={30} color="#e74c3c" />
        </TouchableOpacity>
        <View style={styles.searchScoreContainer}>
          <Image source={Logo} style={styles.image} />
          {}
          <TextInput
            style={styles.textInput}
            placeholder="Enter the student id"
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonSubmit}>
            <Text style={styles.txtSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const ListSchedule = () => {
    return (
      <>
        <TouchableOpacity onPress={handleBackToSubmit} style={styles.btnBack}>
          <Icon name="angle-left" size={30} color="#e74c3c" />
        </TouchableOpacity>
        <View style={styles.listSchedule}>
          <Text style={styles.titleSchedule}>List Schedule</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={fakeData}
            renderItem={({item}) => renderItemSchedule(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      {isSearch ? <SearchSchedule /> : <ListSchedule />}
    </View>
  );
};
export default SplashContainer;
