import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import SegmentTab from 'react-native-segment-tab'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // state={
  //   selected: 0
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.contentContainer}>
          <TouchableOpacity  onPress={this._handleHelpPress}>
              <Text style={styles.getStartedText}>2017 &#x25BC;</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.contentContainer1}>          
              <Text style={styles.getCornText}>Corn</Text>          
        </View>
        
        <ScrollView>         

        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: '#2d8545',
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedTextMiddle:{
    fontSize: 20,
    color: '#222',
    lineHeight: 28,
    textAlign: 'center',
    marginTop:10,
    fontWeight:'bold'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  getCornText:{
    fontSize:25,
    fontWeight:'500',
    color:'#222',
    lineHeight: 30,
    textAlign: 'center',
  },
  contentContainer1:{
    paddingVertical:10
  }
});
