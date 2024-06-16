import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subTitle, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} resizeMode="cover" style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  cardBody: {
    padding: 25,
    paddingVertical: 17,
    gap: 5,
  },
  cardImage: {
    height: 250,
    width: "100%",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  cardSubTitle: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Card;
