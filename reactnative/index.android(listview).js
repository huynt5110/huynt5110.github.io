/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  View,
  Text,
} from 'react-native';

export default class demo1 extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([
        {tenkhoahoc: "anroid", sinhvien: "huy"},
        {tenkhoahoc: "ios", sinhvien: "lis"},
        {tenkhoahoc: "php", sinhvien: "myx"}
      ])
    }
  }
  taohang = (variable) => {
    return(
      <View style={{paddingTop:20, paddingLeft:20}}>
        <Text>{variable.sinhvien}</Text>
        <Text>{variable.tenkhoahoc}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{paddingTop:90}}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.taohang}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('demo1', () => demo1);
