/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import thunk from 'redux-thunk';
// state
let appState = {number : 1, history: [], errorMess: ''}
// action
const add = {
  type: 'add',
  value: 1
}
const sub = {
  type: 'sub',
  value: 1
}
// reducer
const numberGetter = (state = appState, action) => {
  switch (action.type) {
    case 'add':
    const val = state.number + action.value;
    state = {
      ...state,
      history: [...state.history, val],
      number : val
    }
      break;
    case 'sub':
    state = {
      ...state,
      number : state.number - action.value
    }
      break;
  }
  return state
}
const anotherReducer = (state = appState, action) => {
  switch (action.type) {
    case 'LESS_THAN_ZERO':
      state = {
        ...state,
        errorMess: 'Number can not smaller'
      }
      break;
  }
  return state
}
const middlewareLog = store => next => action => {
  console.log('state', store.getState());
  next(action);
  alert('state updated', store.getState());
}
 //store
const reducers = combineReducers({firstReducer: numberGetter, errorMess: anotherReducer});
const store = createStore(reducers, applyMiddleware(thunk, middlewareLog));
// test
const a = (timess) => {
  return dispath => {
    setTimeout(() => store.dispatch(add),timess);
  }
}
store.dispatch(a(3000));
store.dispatch(a(5000));
export default class DemoRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {store.getState().firstReducer.number}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoRedux', () => DemoRedux);
