import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = props => {
  const onSearch = text => console.log(text);

  return (
    <TextInput
      style={styles.text_input}
      placeholder="Ara..."
      onChangeText={props.onSearch}></TextInput>
  );
};

export default SearchBar;
