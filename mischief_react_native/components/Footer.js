import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Image style={styles.like} source={require("../assets/like.png")} />
      <View style={styles.comment}>
        <Image
          style={styles.user}
          source={require("../assets/max-wiederholt.png")}
        />
        <Text style={styles.addComment}> Add a comment... </Text>
      </View>
      <Image
        style={styles.bookmark}
        source={require("../assets/bookmark.png")}
      />
      <Image style={styles.send} source={require("../assets/send.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.regularBackground,
    height: 33,
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 4,
  },
  like: {
    height: 20,
    width: 20,
  },
  comment: {
    flexDirection: "row",
    width: "67%",
    paddingTop: 1,
    marginLeft: 6
  },
  user: {
    height: 18,
    width: 18,
    marginLeft: 8
  },
  addComment: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.greyText,
    paddingLeft: 5,
  },
  bookmark: {
    height: 20,
    width: 20,
    position: "absolute",
    right: 50,
    marginTop: 4,
  },
  send: {
    height: 20,
    width: 20,
    position: "absolute",
    right: 14,
    marginTop: 4,
  },
});

export default Footer;
