import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './styles';
import Line from '../../../../assets/images/chanft.png';
import MapImg from '../../../../assets/images/map.jpg';
const data = [
  {
    id: Math.random() * 10 + Math.random() * 9,
    image: require('../../../../assets/images/faceft.png'),
  },
  {
    id: Math.random() * 10 + Math.random() * 9,
    image: require('../../../../assets/images/googleft.png'),
  },
  {
    id: Math.random() * 10 + Math.random() * 9,
    image: require('../../../../assets/images/hotlineft.png'),
  },
  {
    id: Math.random() * 10 + Math.random() * 9,
    image: require('../../../../assets/images/youtubeft.png'),
  },
];
const Footer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        Phân hiệu trường Đh GTVT Tại TP.Hồ Chí Minh
      </Text>
      <Text style={styles.txt}>
        Địa chỉ: 450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9, TP.Hồ Chí
        Minh
      </Text>
      <Text style={styles.txt}>
        Điện thoại: (028).3896.6798 - (028).7300.1155
      </Text>
      <Text style={styles.txt}>Email: banbientap@utc2.edu.vn</Text>
      <Text style={styles.txt}>
        Fax: (028).3896.4736 - Website: http://utc2.edu.vn
      </Text>
      <Image source={Line} style={styles.img} />
      <Image source={MapImg} style={styles.img} />
      <Text style={styles.txtTitle}>THỐNG KÊ TRUY CẬP</Text>
      <Text style={styles.txt}>Hôm nay : 4,209</Text>
      <Text style={styles.txt}>Tuần hiện tại: 49,937</Text>
      <Text style={styles.txt}>Tháng hiện tại: 572,765</Text>
      <Text style={styles.txt}>Tổng lượt truy cập : 10,644,831</Text>
      <View style={{marginTop: 20}}>
        <FlatList
          keyExtractor={item => item.id}
          horizontal
          data={data}
          renderItem={({item}) => (
            <Image
              source={item.image}
              style={{width: 80, height: 80, margin: 7}}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.txt}>
          Bản quyền thuộc về Phân hiệu Trường Đại học GTVT tại TP. Hồ Chí Minh.
          Clone bởi óc chó Đại.
        </Text>
      </View>
    </View>
  );
};
export default Footer;
