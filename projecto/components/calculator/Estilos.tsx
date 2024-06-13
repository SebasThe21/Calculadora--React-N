import { colorcitos } from "./Colores";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    // Button
    btnAzul: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorcitos.azul,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorcitos.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorcitos.blanco,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGris: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colorcitos.btnGris,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: colorcitos.blanco,
    },
    smallTextDark: {
        fontSize: 32,
        color: colorcitos.negro,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    estiloPrimerNumero: {
        fontSize: 96,
        color: colorcitos.gris,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    estiloSegundoNumero: {
        fontSize: 40,
        color: colorcitos.gris,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})