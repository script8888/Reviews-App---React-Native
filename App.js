import Home from "./screens/home";
import { View } from "react-native";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "./screens/reviewDetails";
import { LayoutContext } from "./context";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/Fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/Fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await getFonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LayoutContext.Provider value={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Review Details" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </LayoutContext.Provider>
  );
}
