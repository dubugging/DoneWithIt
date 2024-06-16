import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Listing",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <>
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title={"Arunava Kirtan"}
            subTitle={"kirtanarunava145@gmail.com"}
          ></ListItem>
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          ></FlatList>
        </View>
        <ListItem
          title={"Log Out"}
          IconComponent={<Icon name={"logout"} backgroundColor="#ffe66d" />}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
