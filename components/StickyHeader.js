import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';

const Header1 = () => {
    return (
      <TouchableOpacity style={styles.city}>
        <Text>RESULTS</Text>
        <Image></Image>
        
        <Text><Icon name='star' />Your Players</Text>
      </TouchableOpacity>
    );
  };
  
  export default Header1;
  