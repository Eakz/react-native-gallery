import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';

const PictureList = ({result}) => {
  return (
    <View>
      <FlatList
        data={result}
        renderItem={item => {
          return (
            <View>
              <Text>{item.index}</Text>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.urls.small}}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 55,
    width: 55,
  },
});

export default PictureList;
