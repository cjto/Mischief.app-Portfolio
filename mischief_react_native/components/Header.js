import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  let sponsored = "";
  if (props.header.type === "ad") {
    sponsored = "Sponsored ";
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.header.image} />
      <View style={styles.column}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{props.header.name}</Text>
          <Text style={styles.title}>{props.header.title}</Text>
          <View style={styles.right}>
            <Text style={styles.timeStamp}>{props.header.timeStamp}</Text>
          </View>
        </View>
        <Text style={styles.bottomRow}>
          <Text style={styles.sponsored}>{sponsored}</Text>
          <Text style={styles.bio} numberOfLines={1}>
            {props.header.bio}
          </Text>
        </Text>
      </View>
      <Image
        style={styles.moreOptions}
        source={require("../assets/moreOptions.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.regularBackground,
    width: "100%",
    flexDirection: "row",
    paddingBottom: 10,
  },
  column: {
    flexDirection: "column",
    marginLeft: 10,
    width: "74%",
  },
  topRow: {
    flexDirection: "row",
    width: "100%",
    marginTop: 13,
  },
  image: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginLeft: 16,
  },
  name: {
    color: Colors.whiteText,
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
  title: {
    color: Colors.whiteText,
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  right: {
    position: "absolute",
    right: 6,
  },
  timeStamp: {
    color: Colors.greyText,
    fontSize: 10,
  },
  bottomRow: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    marginTop: 2,
  },
  sponsored: {
    color: Colors.whiteText,
  },
  bio: {
    color: Colors.greyText,
  },
  moreOptions: {
    width: 20,
    height: 20,
    marginTop: 16,
    position: "absolute",
    right: 12,
  },
});

export default Header;
