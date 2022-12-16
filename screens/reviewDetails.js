import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ReviewDetails;
