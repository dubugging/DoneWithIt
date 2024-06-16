import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({ selectedItem, onSelectItem, items, icon }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}
          <Text style={styles.text}>{selectedItem}</Text>
          <TextInput style={styles.textInput} />
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" style={styles.modal}>
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
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
  text: {
    flex: 1,
    fontSize: 18,
    textTransform: "capitalize",
  },
  modal: {
    marginVertical: "auto",
  },
});

export default AppPicker;
