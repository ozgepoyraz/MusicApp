import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList} from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App() {
  const renderItem = ({item}) => <SongCard song={item}></SongCard>;

  const [list, setList] = useState(music_data);

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch}> </SearchBar>
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={styles.seperator}></View>
        )}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#eceff1',
  },
});

export default App;
