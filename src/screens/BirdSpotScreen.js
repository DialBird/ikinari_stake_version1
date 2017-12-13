import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Separator } from '../components';
import { initializeBirdSpot } from '../actions';

class BirdSpotScreen extends React.Component {
  componentWillMount() {
    this.props.initializeBirdSpot();
  }

  renderItem({item}) {
    const { name, top_image } = item;
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity style={styles.row} onPress={()=>navigate('BirdSpotDetail', { item })}>
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{ uri: 'http://lala.work' + top_image.url }}
            resizeMode={'cover'}
          />
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.rowText}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator(_, rowId) {
    return <Separator rowId={rowId}/>;
  }

  onRefresh() {
    this.props.initializeBirdSpot();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.initial_bird_spots}
          keyExtractor={item => item.id}
          renderItem={this.renderItem.bind(this)}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.props.loading}
          onRefresh={this.onRefresh.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    height: 100
  },
  rowText: {
    fontSize: 16,
    padding: 10
  },
  imageSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  }
});

const mapStateToProps = ({bird_spot}) => {
  const { initial_bird_spots, loading } = bird_spot;
  return { initial_bird_spots, loading };
};

export default connect(mapStateToProps, { initializeBirdSpot })(BirdSpotScreen);
