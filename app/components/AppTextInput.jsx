import { TextInput, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={25} color={colors.medium} />
        )}
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    gap: 5,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
});

export default AppTextInput;
