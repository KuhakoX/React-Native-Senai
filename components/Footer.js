import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>SENAI © 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});