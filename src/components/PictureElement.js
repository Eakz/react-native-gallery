import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PictureElement = ({item}) => {
    const formattedDate = new Date(item.created_at).toDateString();
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: item.urls.small}} />
      <Text style={styles.textStyle}>@{item.user.username}</Text>
      <Text style={styles.textStyle}>Likes - {item.likes}</Text>
      <Text style={styles.textStyle}>{formattedDate}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 180,
    width:180,
    backgroundColor:'#ccc',
    margin:10
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    flex:1
  },
  textStyle:{
      textAlign:'center'
  }
});

export default PictureElement;
