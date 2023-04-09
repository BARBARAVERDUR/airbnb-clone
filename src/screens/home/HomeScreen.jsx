import React from "react";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { styles } from "./HomeScreen.styles";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/main.jpeg")}
      >
        <Text style={styles.title}>Travel and Enjoy!</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
