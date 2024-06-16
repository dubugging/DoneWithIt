import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <>
      <ExpoStatusBar />
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          ></Image>
          <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.btnContainer}>
          <AppButton title={"login"} type={"primary"} />
          <AppButton title={"register"} type={"secondary"} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnContainer: {
    padding: 20,
    width: "100%",
    gap: 15,
  },
  logo: {
    height: 150,
    width: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagLine: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "500",
  },
});

export default WelcomeScreen;
