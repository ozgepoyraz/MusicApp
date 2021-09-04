import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.inner_desp_container}>
          <View style= {styles.inner_desp_container}>
            <Text style={styles.artist}>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          <View>
            {song.isSoldOut && <Text style= {styles.sold_out}>TÜKENDİ</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
