import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Header from "./Header";
import Content from "./Content";
import Caption from "./Caption";
import PostInteractionCell from "../components/PostInteractionCell";
import Footer from "./Footer";

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Header id={props.id} header={props.header} />
      <Content id={props.id} content={props.content} />
      <Caption id={props.id} caption={props.caption} />
      <PostInteractionCell />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 6 },
});

export default Post;
