import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const DarkButton = ({ title, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={0.3}
    style={[styles.buttonContainer, style]}
    onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0a81ab',
    width: '95%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },
});

export default DarkButton;
