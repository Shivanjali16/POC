

import React, {Component} from 'react';
import {View,Text,StyleSheet, Image, Picker} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default class Pickerex extends Component{
    render(){
        return(
            <View style={{
                flexDirection: "row",
                height: 100,
                padding:20
            
              }}>
                 <View style={{backgroundColor:'Colors.lighter',flex:0.5}}>
                 <Picker>
                 <Picker.Item label='EVENTS1' value='0' />
                   <Picker.Item label='All Matches' value='1' />
                   <Picker.Item label='Boys Singles' value='2' />
                   <Picker.Item label='Boys Doubles' value='3' />
                  <Picker.Item label='Gentlemans Invitation' value='4' />
                   <Picker.Item label='Girls Doubles' value='5' />
                </Picker>
        
        
        
                 </View>
                <View style={{backgroundColor:'Colors.lighter',flex:0.5}}>
                <Picker>
                <Picker.Item label='DAY' value='0' />
                  <Picker.Item label='All Matches' value='1' />
                  <Picker.Item label='Boys Singles' value='2' />
                  <Picker.Item label='Boys Doubles' value='3' />
                  <Picker.Item label='Gentlemans Invitation' value='4' />
                  <Picker.Item label='Girls Doubles' value='5' />
                </Picker>
        
        
        
        
                </View>
        
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        
    },
  

})