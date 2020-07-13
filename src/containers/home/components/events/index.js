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
    name:
      'Lễ công bố của 07 trường đại học kỹ thuật về phát triển các chương trình đào tạo kỹ sư',
  },
  {
    id: 2,
    image: require('../../../../assets/images/tintuc2.jpg'),
    name: 'Tư vấn tuyển sinh tại Trường THPT Tam Phú - Thủ Đức',
  },
  {
    id: 3,
    image: require('../../../../assets/images/tintuc3.jpg'),
    name: 'Tư vấn tuyển sinh tại Trường THPT Tam Phú - Thủ Đức',
  },
  {
    id: 4,
    image: require('../../../../assets/images/tintuc4.jpg'),
    name:
      'Đại hội Đảng bộ Trường Đại học Giao thông vận tải lần thứ XXX, nhiệm kỳ 2020 - 2025',
  },
];
const EventComponent = props => {
  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.imageItem} source={item.image} />
        <View style={{marginLeft: 20, paddingRight: 20}}>
          <Text style={styles.timeItem}>{new Date().toLocaleDateString()}</Text>
          <Text style={styles.titleItem}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.bgTitle} />
        <Text style={styles.txtTitle}>Tin tức - Sự Kiện</Text>
      </View>
      <ScrollView>
        <FlatList
          style={styles.events}
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
