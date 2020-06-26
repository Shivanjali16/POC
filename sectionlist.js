import React, {Component} from 'react';
import {View,Text,StyleSheet, Image, Picker,SectionList} from 'react-native';


export default class Section extends Component{
    render(){
        var data = [
            {
              title: 'Client Side',
              data: ['React JS', 'Angular', 'Ember JS', 'Knockout JS'],
            },
            { title: 'Server Side', data: ['Node.js', 'Express.js'] },
          ];
        
        return(    
        <View style={styles.container}>
            

          
            <SectionList
              renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                  <Text key={index}>{item}</Text>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.itemHeader}>
                  <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                </View>
              )}
              sections={data}
              keyExtractor={(item, index) => item + index}
            />
              
          </View>
        );
      
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    itemHeader:{
      backgroundColor:'steelblue'
    },
    itemContainer:{
      backgroundColor:'skyblue'
    }
  });