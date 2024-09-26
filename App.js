import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const fortuneQuotes = [
  'A sorte favorece os audazes.',
  'Seu sorriso ilumina o caminho dos outros.',
  'Grandes mudanças estão a caminho.',
  'Confie em sua intuição, ela está certa.',
  'A felicidade é uma jornada, não um destino.',
  'Você receberá boas notícias em breve.',
  'O sucesso é a soma de pequenos esforços.',
  'A paciência é a chave para o sucesso.',
  'Acredite em si mesmo e em suas capacidades.',
  'Um novo começo está à sua porta.'
];

const App = () => {

  const [brokenCookie, setBrokenCookie] = useState(false)
  const [fortuneQuote, setFortuneQuote] = useState("")

  const breakFortuneCookie = () => {
    const randomFortuneQuote = fortuneQuotes[Math.floor(Math.random() * fortuneQuotes.length)]
    setFortuneQuote(randomFortuneQuote)
    setBrokenCookie(true)
  }

  const resetFortuneCookie = () => {
    setFortuneQuote("")
    setBrokenCookie(false)
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Fortune Cookie App</Text>

      <TouchableOpacity onPress={brokenCookie ? resetFortuneCookie : breakFortuneCookie}>
        <Image
          style={styles.cookieImage}
          source={brokenCookie ? require("./assets/opened_cookie.png") : require("./assets/closed_cookie.png")}
        />
      </TouchableOpacity>

      {brokenCookie &&  <Text style={styles.fortuneText}> - {fortuneQuote}</Text>}

      <TouchableOpacity style={styles.button} onPress={brokenCookie ? resetFortuneCookie : breakFortuneCookie}>
        <Text style={styles.buttonText}>
          {brokenCookie ? "Resetar" : "Quebrar Biscoito da Sorte"}
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
    color: "#f3b61f",
  },

  cookieImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  fortuneText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
  },

  button: {
    backgroundColor: "#f3b61f",
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default App;