/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
  ImageBackground,
  PanResponder,
  SectionList,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from './sectionlist.js';
import Pickerex from './picker';

declare const global: {HermesInternal: null | {}};

const App = () => {
 

  
  return (
    <>
    <View>
     
    <Pickerex></Pickerex>
    </View>
    
    
      {/* <View style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}>
         <View style={{backgroundColor:'Colors.lighter',flex:0.5}}>
         <Picker>
         <Picker.Item label='EVENTS' value='0' />
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

        </View> */}
        
        
    

    
      
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
      </> 
  
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
