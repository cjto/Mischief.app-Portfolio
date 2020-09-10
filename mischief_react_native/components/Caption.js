import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Caption = (props) => {
  let container = <View></View>;
  if (props.caption.text.length > 0) {
    container = (
      <View style={styles.container}>
        <Text style={styles.textContainer} numberOfLines={2}>
          <Text style={styles.username}>{props.caption.username} </Text>
          <Text style={styles.text}>{props.caption.text}</Text>
        </Text>
      </View>
    );
  }

  return container;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.regularBackground,
  },
  textContainer: {
    marginTop: 11,
    marginLeft: 16,
    marginBottom: 2,
    flexDirection: "row",
    width: "92%",
  },
  username: {
    fontFamily: "Roboto-Bold",
    color: Colors.whiteText,
    fontSize: 12,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: Colors.greyText,
    fontSize: 12,
  },
});

export default Caption;
