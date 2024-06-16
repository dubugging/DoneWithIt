import { SafeAreaView, StyleSheet } from "react-native";
import Constansts from "expo-constants";
import { StatusBar } from "expo-status-bar";

const Screen = ({ children, style }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constansts.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
