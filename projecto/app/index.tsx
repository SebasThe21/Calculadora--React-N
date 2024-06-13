import { StyleSheet, View, Text, Switch, SafeAreaView } from "react-native";
import Home from "../components/calculator/Home";
import { Oscuro } from "@/components/calculator/Oscuro";
import { useState } from "react";
import { colorcitos } from "@/components/calculator/Colores";
import Button from "@/components/calculator/Button";
import MyKeyboard from "@/components/calculator/Numeros";

//usando el theme y el componente "Oscuro" , se realiza una función para que la calculadra tenga modo claro y mod ooscuro
export default function index() {
  const [theme, setTheme] = useState("light");
  return (
    <Oscuro.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />

      </SafeAreaView>
    </Oscuro.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorcitos.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
