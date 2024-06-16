import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "90%",
    marginHorizontal: "auto",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
