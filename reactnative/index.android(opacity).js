/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

export default class demo1 extends Component {
  constructor(props){
    super(props)
    this.state= {
      number: 0,
      text: 'true'
    }
  }
    click = () => {
        this.setState({
          number: ++this.state.number,
          text: ((this.state.text === 'true') ? 'false' : 'true')
        })
    }
    render() {
        return (
            <View style={styles.container}>
              <Text>{this.state.number}</Text>
              <Text>{this.state.text}</Text>
                <TouchableOpacity onPress={() => {this.click()}}>
                    <View style={styles.smallview}>
                        <Text>Click me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    smallview: {
        backgroundColor: 'green',
        width: 50,
        height: 20,
        marginTop: 100,
        marginLeft: 20
    }
});

AppRegistry.registerComponent('demo1', () => demo1);
