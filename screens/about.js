import { StyleSheet, View, Text } from "react-native";

import React from "react";

function About() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default About;
