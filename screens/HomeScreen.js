import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser,Accelerometer } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    accelerometerData: {}
  }

  render() {
    let { x, y, z } = [2,3,4];
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/app_icon1.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            
            <Text style={styles.getTextYear}>2017&#x25BC;</Text>
            <Text style={styles.getStartedText}>Profit/Loss</Text>

            {/*<View>
              <Button onPress={this._activate}>Activate</Button>
              <Button onPress={this._deactivate}>Deactivate</Button>
            </View>*/}
          </View>
          <View style={styles1.sensor}>
            {/*<Text>Accelerometer:</Text>
            <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>*/}

            <View style={styles1.buttonContainer}>
              <TouchableOpacity onPress={this._toggle} style={[styles1.button, styles1.leftButton]}>
                <Text style={{color:'#ffffff'}}>Total</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._slow} style={[styles1.button, styles1.rightButton]}>
                <Text style={{color:'#2d8545'}}>Per Acre</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getTextDollar}>$60,292.23</Text>
          </View>
          <View style={styles.totalText}>
            <Text style={{color:'#7d8780'}}>Total Revenue</Text><Text style={{color:'#222'}}>$76,356</Text>
          </View>
          <View style={{borderBottomWidth:0.5, borderColor:'#a4a4a4', marginLeft:20, marginRight:20}}></View>
          <View style={styles.totalText}>
            <Text style={{color:'#7d8780'}}>Total Costs</Text><Text style={{color:'#222'}}>$17,264</Text>
          </View>         
          <View style={{borderBottomWidth:0.5, borderColor:'#a4a4a4'}}></View>
          <View style={{backgroundColor:'#e7eae9',padding:20,paddingTop:25}}>
            <View style={styles.cardView}>
              <View style={styles.cardTitle}>
                <Text style={{color:'#222',fontSize:25,fontWeight:'bold'}}>Corn</Text>
                <Text style={{color:'#7d8780',fontSize:18,fontWeight:'700',alignSelf:'center'}}>1,757 Acres</Text>
              </View>
              <View style={styles.cardTitle}>
                 <Text style={{color:'#314136',fontSize:17,fontWeight:'700'}}>Contracts</Text>
                 <Text style={{color:'#314136',fontSize:17,fontWeight:'700'}}>6</Text>
              </View>
            </View>
          </View>
        </ScrollView>

       
      </View>
    );
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }

  _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  }

  _fast = () => {
    Accelerometer.setUpdateInterval(16);
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener((result) => {
      this.setState({accelerometerData: result});
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
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
    marginBottom: 10,
  },
  welcomeImage: {
    width: 50,
    height: 50,
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
    fontSize: 19,
    color: '#222',
    lineHeight: 28,
    textAlign: 'center',
    fontWeight:'bold'
  },
  getTextYear:{
    fontSize:17,
    color:'#2d8545',
    lineHeight: 26,
  },
  getTextDollar:{
    fontSize:43,
    color:'#2d8545',
    lineHeight: 45,
    fontWeight:'400',
    marginTop:20
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
  totalText:{
    width:'100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,    
  },
  cardView:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#e1e3e2',
    backgroundColor:'#ffffff'
  },
  cardTitle:{    
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:15,
    paddingBottom:15,
    paddingRight:20,
    marginLeft:20,    
    borderBottomWidth:0.5,
    borderColor:'#e1e3e2',
  }
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',    
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    padding: 10,
    height: 36
  },
  rightButton: {
    borderWidth: 1,    
    borderColor: '#2d8545',
    borderBottomRightRadius:18,
    borderTopRightRadius:18,
    backgroundColor:'#ffffff',    
  },
  leftButton: {
    borderWidth: 1,    
    borderColor: '#2d8545',
    borderBottomLeftRadius:18,
    borderTopLeftRadius:18,
    backgroundColor:'#2d8545',    
  },
  sensor: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
