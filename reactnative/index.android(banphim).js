/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
    Text
} from 'react-native';

export default class demo1 extends Component {
  render() {
    return (
      <View style = {styles.bao}>
          <View style={styles.dong}>
              <View style={styles.cot}>
                  <Text style={[styles.number,styles.number1]}>1</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>2</Text>
                  <Text style={styles.text}>abc</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>3</Text>
                  <Text style={styles.text}>def</Text>
              </View>
          </View>
          <View style={styles.dong}>
              <View style={styles.cot}>
                  <Text style={styles.number}>4</Text>
                  <Text style={styles.text}>ghi</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>5</Text>
                  <Text style={styles.text}>jkl</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>6</Text>
                  <Text style={styles.text}>mno</Text>
              </View>
          </View>
          <View style={styles.dong}>
              <View style={styles.cot}>
                  <Text style={styles.number}>7</Text>
                  <Text style={styles.text}>pqrs</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>8</Text>
                  <Text style={styles.text}>tuv</Text>
              </View>
              <View style={styles.cot}>
                  <Text style={styles.number}>9</Text>
                  <Text style={styles.text}>wxyz</Text>
              </View>
          </View>
          <View style={styles.dong}>
              <View style={styles.specical}></View>
              <View style={styles.cot}>
                  <Text style={styles.number}>0</Text>
              </View>
              <View style={styles.specical}></View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bao: {
        flex:1
    },
    dong: {
        flex:1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    cot: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderColor: 'black',
        borderRightWidth: 1,
    },
    text: {
        fontSize: 40
    },
    number: {
        fontSize: 20
    },
    specical: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderColor: 'black',
        borderRightWidth: 1,
        backgroundColor: 'grey'
    },
    number1: {
        marginBottom: 55
    }
});

AppRegistry.registerComponent('demo1', () => demo1);
