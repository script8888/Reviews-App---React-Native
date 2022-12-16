import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

function About() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  );
}

export default About;
