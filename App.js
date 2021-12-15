import { StyleSheet, Text, View } from "react-native";

import Navigation from "./Navigation";
import { Provider } from "react-redux";
import React from "react";
import store from "./src/store/reducers";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
