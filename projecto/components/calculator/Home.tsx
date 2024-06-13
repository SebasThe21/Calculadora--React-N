import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
//import Button from "../calculator/Button"
export default function Home() {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={10}
        value={input}
        style={styles.input}
        keyboardType="number-pad"
        showSoftInputOnFocus={false}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="AC" onPress={() => setInput("")} color="orange" />

          <Button title="<-" onPress={() => setInput("")} color="orange" />

          <Button title="%" onPress={() => setInput("")} color="orange" />

          <Button title="/" onPress={() => setInput("")} color="orange" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    //paddingTop: StatusBar.currentHeight + 20,
  },

  input: {
    width: "100%",
    height: "30%",
    fontSize: 45,
    textAlign: "center",
    color: "orange",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
