import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import colors from "../constants/Colors";
import Topbar from "../components/Topbar";
import Posts from "../constants/Posts";
import Post from "../components/Post";

const NewsfeedScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: colors.darkBackground }}>
      <Topbar navigation={navigation} />
      <FlatList
        data={Posts}
        renderItem={(itemData) => (
          <Post
            id={itemData.item.id}
            header={itemData.item.header}
            content={itemData.item.content}
            caption={itemData.item.caption}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 5,
    height: "100%",
    alignItems: "center",
    color: "white",
  },
  text: {
    color: "white",
    paddingTop: 5,
  },
});

export default NewsfeedScreen;
