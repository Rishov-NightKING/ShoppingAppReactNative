import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/rishov.jpeg")}
            title="Rishov Paul"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 30,
  },
  userContainer: {
    marginVertical: 40,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: "700",
  },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.secondary,
  },
});

export default ListingDetailsScreen;
