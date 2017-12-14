import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class BlockButton extends React.Component {
  renderBadge(num) {
    if (num <= 0) return;

    return (
      <Badge
        value={num}
        containerStyle={styles.badgeContainer}
        wrapperStyle={styles.badgeWrapper}
      />
    );
  }

  render() {
    const { icon, title, onPress, num = 0 } = this.props;
    return (
      <TouchableOpacity style={styles.blockButton} onPress={onPress}>
        {this.renderBadge(num)}
        <Icon name={icon} size={30} />
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  blockButton: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeContainer: {
    backgroundColor: '#f00'
  },
  badgeWrapper: {
    position: 'absolute',
    top: 5,
    right: 5
  }
});

export default BlockButton;
