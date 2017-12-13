import React from 'react';
import {
  StyleSheet,
  View,
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
    console.log(this.state.region);
    return (
      <ScrollView style={styles.container}>
        <MapView
          region={ this.state.region }
          showsUserLocation={ true }
          style={styles.map}
        >
          <MapView.Marker coordinate={this.state.region}/>
        </MapView>
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
  }
});

export default BirdSpotDetailScreen;
