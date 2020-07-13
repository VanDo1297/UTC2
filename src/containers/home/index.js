import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import Carousel from '../../components/carousel';
import Events from './components/events';
import Notifications from './components/notifications';
import Admissions from './components/admissions';
import Lib from './components/lib';
import Grid from './components/grid';
import Footer from './components/footer';
const dataSlider = [
  {
    id: Math.random() * 10,
    image: require('../../assets/images/slider21.jpg'),
  },
  {
    id: Math.random() * 10,
    image: require('../../assets/images/slider22.png'),
  },
  {
    id: Math.random() * 10,
    image: require('../../assets/images/slider23.jpg'),
  },
  {
    id: Math.random() * 10,
    image: require('../../assets/images/slider24.png'),
  },
  {
    id: Math.random() * 10,
    image: require('../../assets/images/slider25.png'),
  },
];
const HomeComponents = props => {
  const handleClickhamburger = () => {
    props.navigation.openDrawer();
  };
  const handlePressTestChedule = () => {
    props.navigation.navigate('TestSchedule');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleClickhamburger} style={styles.hamburger}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>
      <ScrollView>
        <Header />
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Tìm kiếm" />
          <View style={styles.txtSearchText}>
            <Text style={styles.txtSearch}>Tìm kiếm</Text>
          </View>
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <Events />
        <Notifications />
        <Admissions />
        <Lib />
        <View>
          <FlatList
            keyExtractor={item => item.id.toString()}
            horizontal
            data={dataSlider}
            renderItem={({item}) => (
              <Image source={item.image} style={styles.imageSlider} />
            )}
            onEndThreshold={0}
          />
        </View>
        <Grid handlePressTestChedule={handlePressTestChedule} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeComponents;
