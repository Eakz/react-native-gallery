import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import PictureElement from './PictureElement';

const PictureList = ({result}) => {
  return (
    <View>
      <FlatList
      style={styles.list}
        numColumns={2}
        data={result}
        renderItem={item => {
          return (
            <View>
              <Text>{item.index}</Text>
                <PictureElement item={item.item}/>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    list:{
        backgroundColor:'#fff'
    }
});

export default PictureList;
