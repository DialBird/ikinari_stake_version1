import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class BirdSpotDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props.navigation.state.params;
    this.state = {
      name: item.name,
      commentary: item.commentary,
      region: {
        latitude: item.lat,
        longitude: item.lon,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  static navigationOptions = ({navigation}) => {
    // thisが使えないのに注意
    const title = navigation.state.params.item.name;
    return { title };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MapView
          region={ this.state.region }
          showsUserLocation={ true }
          style={styles.map}
        >
          <MapView.Marker coordinate={this.state.region}/>
        </MapView>
        <View style={styles.commentaryContainer}>
          <Text style={styles.commentaryText}>{this.state.commentary}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  map: {
    height: 300,
  },
  commentaryContainer: {
    padding: 20
  },
  commentaryText: {
    fontSize: 16,
    lineHeight: 24
  }
});

export default BirdSpotDetailScreen;
