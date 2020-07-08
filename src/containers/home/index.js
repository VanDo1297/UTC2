import React from 'react';
import {View, SafeAreaView, TextInput, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import Carousel from '../../components/carousel';
import Events from './components/events';
import Notifications from './components/notifications';
const HomeComponents = props => {
  const handleClickhamburger = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header handleClickhamburger={handleClickhamburger} />
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="aa" />
          <View style={styles.txtSearchText}>
            <Text style={styles.txtSearch}>Search</Text>
          </View>
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <Events />
        <Notifications />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeComponents;
