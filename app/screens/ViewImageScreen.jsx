import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <>
      <ExpoStatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <MaterialIcons
          name="close"
          size={35}
          color="white"
          style={styles.closeIcon}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
          style={styles.deleteIcon}
        />
        <Image
          style={styles.img}
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  img: {
    width: "100%",
    height: "100%",
  },

  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 25 : 25,
    left: 10,
  },

  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 25 : 25,
    right: 10,
  },
});

export default ViewImageScreen;
