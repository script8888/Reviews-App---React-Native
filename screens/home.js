import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useContext } from "react";
import { LayoutContext } from "../context";

function Home({ navigation }) {
  const onLayout = useContext(LayoutContext);
  return (
    <View onLayout={onLayout} style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Review Details")}
        title="Go to Review Details"
      />
    </View>
  );
}

export default Home;
