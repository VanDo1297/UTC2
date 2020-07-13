import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    icon: 'book',
    name: 'Thư viện',
    color: 'rgb(36,22,74)',
  },
  {
    id: 2,
    icon: 'bookmark',
    name: 'Chuẩn đầu ra',
    color: 'rgb(254,197,49)',
  },
  {
    id: 3,
    icon: 'calendar-o',
    name: 'Tra cứu lịch thi',
    color: 'rgb(254,197,49)',
  },
  {
    id: 4,
    icon: 'globe',
    name: 'Văn phòng điện tử',
    color: 'rgb(36,22,74)',
  },
];
const EventComponent = props => {
  const handlePressTestChedule = () => {
    props.handlePressTestChedule();
  };
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={item.id === 3 ? handlePressTestChedule : () => {}}
        style={{
          ...styles.img,
          backgroundColor: item.color,
        }}>
        <Icon
          name={item.icon}
          styles={styles.imageThumbnail}
          size={70}
          color="#ffffff"
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        data={data}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};
export default EventComponent;
