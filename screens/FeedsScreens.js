import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FloatingWirteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <FloatingWirteButton />
      <Text>aa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
