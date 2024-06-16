import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItem = ({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView style={{ height: true }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.touch}>
          <View style={styles.listItem}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View>
              <Text style={styles.title}>{title}</Text>
              {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  title: {
    fontSize: 22.5,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 17,
    color: colors.medium,
    fontWeight: "400",
  },
});

export default ListItem;
