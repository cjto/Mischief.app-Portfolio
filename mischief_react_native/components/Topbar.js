import React from "react";
import { Platform, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Topbar = ({ navigation }) => {
  return (
    <View style={styles.topbar}>
      <View style={styles.leftMenu}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons
            name="ios-menu"
            color="white"
            backgroundColor={colors.primary}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search Screen");
        }}
        style={styles.searchBarView}
      >
        <Ionicons
          name="ios-search"
          color="white"
          backgroundColor={colors.searchBackground}
          size={18}
        />
        <Text style={styles.searchBar}>Search Hollywood</Text>
      </TouchableOpacity>
      <View style={styles.rightMenu}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image
            source={require("../assets/max-wiederholt.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    height: Platform.OS === "ios" ? 64 : 40,
    paddingTop: Platform.OS === "ios" ? 27 : 3,
    backgroundColor: colors.regularBackground,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6
  },
  leftMenu: {
    height: 45,
    width: "12%",
    backgroundColor: colors.primary,
    paddingLeft: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarView: {
    backgroundColor: colors.searchBackground,
    height: 30,
    width: "75%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    paddingLeft: 8,
    height: 15,
    width: "90%",
    backgroundColor: colors.searchBackground,
    color: "white",
    fontSize: 12,
    fontFamily: "Roboto-Regular"
  },
  rightMenu: {
    height: 45,
    width: "12%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Topbar;
