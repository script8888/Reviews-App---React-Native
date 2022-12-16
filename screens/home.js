import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

function Home({ onLayout }) {
  return (
    <View onLayout={onLayout} style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}

export default Home;
