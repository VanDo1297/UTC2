import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = [
  {
    id: 1,
    image: require('../../../../assets/images/tintuc1.jpg'),
  },
  {
    id: 2,
    image: require('../../../../assets/images/tintuc2.jpg'),
  },
  {
    id: 3,
    image: require('../../../../assets/images/tintuc3.jpg'),
  },
  {
    id: 4,
    image: require('../../../../assets/images/tintuc4.jpg'),
  },
];
const EventComponent = props => {
  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.imageItem} source={item.image} />
        <View style={{marginLeft: 20}}>
          <Text style={styles.timeItem}>{new Date().getFullYear()}</Text>
          <Text style={styles.titleItem}>aa</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.bgTitle} />
        <Text style={styles.txtTitle}>Thông báo</Text>
      </View>
      <ScrollView>
        <FlatList
          style={styles.eventItem}
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={({item}) => renderItem(item)}
        />
      </ScrollView>
      <TouchableOpacity style={styles.more}>
        <Text style={{marginRight: 10}}>Xem thêm</Text>
        <Icon name="chevron-down" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default EventComponent;
