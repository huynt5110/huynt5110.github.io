import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import I18n from 'react-native-i18n'

export default class notify extends Component {
  render() {
    return (
      <View >
        <Text >
          {I18n.t('greeting')}
        </Text>
      </View>
    );
  }
}
I18n.fallbacks = true

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  fr: {
    greeting: 'Bonjour!'
  },
  vi: {
    greeting: 'Xin chào!'
  }
}

AppRegistry.registerComponent('notify', () => notify);
