import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "./Estilos";
import { colorcitos } from "./Colores";

export default function Teclado() {
  //Se declaran las variables de lo que son los numeros a operar, las operaciones y el resultado.
  const [primerNumero, setprimerNumero] = React.useState("");
  const [segundoNumero, setsegundoNumero] = React.useState("");
  const [operacion, setoperacion] = React.useState("");
  const [resultado, setresultado] = React.useState<number | null>(null);

  //Con esta función al presionar numeros se concatenaran hasta que llega a una cantidad menor a 9 para proceder a operarlos
  const elegirNumero = (buttonValue: string) => {
    if (primerNumero.length < 10) {
      setprimerNumero(primerNumero + buttonValue);
    }
  };
  //Esta función nos permitira elegir una operación aritmetica que al presionar, enviara el numero que habiamos escrito a la segunda variable
  //para permitir la entrada del proximo numero
  const elegirOperacion = (buttonValue: string) => {
    setoperacion(buttonValue);
    setsegundoNumero(primerNumero);
    setprimerNumero("");
  };
  //Boton AC
  const clear = () => {
    setprimerNumero("");
    setsegundoNumero("");
    setoperacion("");
    setresultado(null);
  };

  //Controla como se muestran los numeros, entre mas grande mas pequeño se hara

  const primerNumeroDisplay = () => {
    if (resultado !== null) {
      return (
        <Text
          style={
            resultado < 99999
              ? [Styles.estiloPrimerNumero, { color: colorcitos.resultado }]
              : [
                  Styles.estiloPrimerNumero,
                  { fontSize: 50, color: colorcitos.resultado },
                ]
          }
        >
          {resultado?.toString()}
        </Text>
      );
    }
    if (primerNumero && primerNumero.length < 6) {
      return <Text style={Styles.estiloPrimerNumero}>{primerNumero}</Text>;
    }
    if (primerNumero === "") {
      return <Text style={Styles.estiloPrimerNumero}>{"0"}</Text>;
    }
    if (primerNumero.length > 5 && primerNumero.length < 8) {
      return (
        <Text style={[Styles.estiloPrimerNumero, { fontSize: 70 }]}>
          {primerNumero}
        </Text>
      );
    }
    if (primerNumero.length > 7) {
      return (
        <Text style={[Styles.estiloPrimerNumero, { fontSize: 50 }]}>
          {primerNumero}
        </Text>
      );
    }
  };

  //Funcion que realizara las operaciones dependiendo de lo que elijamos

  const getresultado = () => {
    switch (operacion) {
      case "+":
        clear();
        setresultado(parseInt(segundoNumero) + parseInt(primerNumero));
        break;
      case "-":
        clear();
        setresultado(parseInt(segundoNumero) - parseInt(primerNumero));
        break;
      case "*":
        clear();
        setresultado(parseInt(segundoNumero) * parseInt(primerNumero));
        break;
      case "/":
        clear();
        setresultado(parseInt(segundoNumero) / parseInt(primerNumero));
        break;
      default:
        clear();
        setresultado(0);
        break;
    }
  };
  //con esto se realiza la parte visual de la calculadora, indicando que simbolos se asociaran a cada botón
  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.estiloSegundoNumero}>
          {segundoNumero}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operacion}
          </Text>
        </Text>
        {primerNumeroDisplay()}
      </View>
      <View style={Styles.row}>
        <Button titulo="C" gris onPress={clear} />
        <Button titulo="+/-" gris onPress={() => elegirOperacion("+/-")} />
        <Button titulo="％" gris onPress={() => elegirOperacion("％")} />
        <Button titulo="÷" azul onPress={() => elegirOperacion("/")} />
      </View>
      <View style={Styles.row}>
        <Button titulo="7" onPress={() => elegirNumero("7")} />
        <Button titulo="8" onPress={() => elegirNumero("8")} />
        <Button titulo="9" onPress={() => elegirNumero("9")} />
        <Button titulo="×" azul onPress={() => elegirOperacion("*")} />
      </View>
      <View style={Styles.row}>
        <Button titulo="4" onPress={() => elegirNumero("4")} />
        <Button titulo="5" onPress={() => elegirNumero("5")} />
        <Button titulo="6" onPress={() => elegirNumero("6")} />
        <Button titulo="-" azul onPress={() => elegirOperacion("-")} />
      </View>
      <View style={Styles.row}>
        <Button titulo="1" onPress={() => elegirNumero("1")} />
        <Button titulo="2" onPress={() => elegirNumero("2")} />
        <Button titulo="3" onPress={() => elegirNumero("3")} />
        <Button titulo="+" azul onPress={() => elegirOperacion("+")} />
      </View>
      <View style={Styles.row}>
        <Button titulo="." onPress={() => elegirNumero(".")} />
        <Button titulo="0" onPress={() => elegirNumero("0")} />
        <Button
          titulo="⌫"
          onPress={() => setprimerNumero(primerNumero.slice(0, -1))}
        />
        <Button titulo="=" azul onPress={() => getresultado()} />
      </View>
    </View>
  );
}
