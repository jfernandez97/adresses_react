import { Colors } from "./src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Places from "./src/screens/Places";
import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Navigation() {
  const PlaceStack = createStackNavigator();

  // function PlaceStackRender() {
  //   return (
  //     <PlaceStack.Navigator>
  //       <PlaceStack.Screen name={"Places"} componenet={Places} />
  //     </PlaceStack.Navigator>
  //   );
  // }

  return (
    <NavigationContainer>
      <PlaceStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.darkSienna,
          },
        }}
      >
        <PlaceStack.Screen
          name={"Places"}
          componenet={Places}
          options={({ navigation }) => ({
            title: "Direcciones",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons size={23} name="md-add" color={Colors.darkSienna} />
              </TouchableOpacity>
            ),
          })}
        />
      </PlaceStack.Navigator>
    </NavigationContainer>
  );
}
