import React from 'react';
import {StyleSheet, View} from 'react-native'
import {ListEventsScreen} from 'screens'

export default () => <View style={styles.container}><ListEventsScreen/></View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});