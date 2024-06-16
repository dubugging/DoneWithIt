import { Image, View, StyleSheet, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
      <View>
        <Image
          source={require("../assets/jacket.jpg")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.cardTitle}>Jacket For Sale!!</Text>
          <Text style={styles.price}>$100</Text>
          <View style={styles.listItemContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title={"Arunava Kirtan"}
              subTitle={"7 Listings"}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: 325,
  },
  detailsContainer: {
    padding: 25,
    paddingVertical: 17,
    gap: 7,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "900",
  },
  listItemContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
