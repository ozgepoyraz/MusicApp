import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 5,
  },
  inner_container: {
      flex:1,
    justifyContent: 'center',
  },
  inner_desp_container: {
    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  artist: {
      marginEnd: 10
  },
  year: {
      color: '#cccccc',
      fontWeight: 'bold',
      fontSize: 12,
  },
  sold_out: {
    fontSize: 12,
    padding: 3,
    color: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    
    
  }
});

export default styles;
