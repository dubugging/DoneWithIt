import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { StatusBar } from "expo-status-bar";
import Card from "../components/Card";
import colors from "../config/colors";
import ListingListSeperator from "../components/ListingListSeperator";

const ListingScreen = () => {
  const data = [
    {
      id: 1,
      image: require("../assets/jacket.jpg"),
      title: "Red Jacket for sale",
      subTitle: "$100",
    },
    {
      id: 2,
      image: require("../assets/couch.jpg"),
      title: "Couch in great condition",
      subTitle: "$1000",
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <Screen style={{ backgroundColor: colors.light }}>
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          )}
          ItemSeparatorComponent={ListingListSeperator}
        ></FlatList>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ListingScreen;
