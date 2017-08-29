/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import PopupDialog,{ SlideAnimation } from 'react-native-popup-dialog';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
} from 'react-native';

export default class splash extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Button title="Click" onPress={() => {this.refs.a.showDialog();}}></Button>
        <Dialog ref={'a'}/>
      </View>
    );
  }
}
class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url : 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
    }
  }
  showDialog = () => {
    this.popupDialog.show();
  }
  offDialog = () => {
    this.popupDialog.dismiss();
  }
  render() {
    return (
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} dialogAnimation = { new SlideAnimation({ slideFrom: 'top' })}>
          <View alignItems= 'center'>
            <Text>This is new</Text>
            <Image style = {{width: 200,height: 200}} source = {{uri: this.state.url}}/>
            <Button title="Close" onPress = {this.offDialog}/>
          </View>
        </PopupDialog>
    );
  }
}


AppRegistry.registerComponent('splash', () => splash);
