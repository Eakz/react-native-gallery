import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import PictureList from '../components/PictureList';
// api + hook
import Unsplash from '../api/unsplash';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = Unsplash();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <PictureList result={results} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default HomeScreen;
