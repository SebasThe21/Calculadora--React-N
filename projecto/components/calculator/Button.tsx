import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Oscuro } from "./Oscuro";
import { Styles } from "./Estilos";

interface ButtonP {
  onPress: () => void;
  titulo: string;
  azul?: boolean;
  gris?: boolean;
}

export default function Button({ titulo, onPress, azul, gris }: ButtonP) {
  const theme = useContext(Oscuro);

  return (
    <TouchableOpacity
      style={
        azul
          ? Styles.btnAzul
          : gris
          ? Styles.btnGris
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          azul || gris
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}
