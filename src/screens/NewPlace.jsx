import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { addPlace } from "../store/actions/PlaceAction";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function NewPlace() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [place, setPlace] = useState("");

  const handlerAddPlace = () => {
    dispatch(addPlace("Place"));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={place}
          onChangeText={setPlace}
        ></TextInput>
        <Button title={"Grabar direccion"} onPress={handlerAddPlace} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 4,
  },
});
