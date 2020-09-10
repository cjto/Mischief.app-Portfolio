import React, { useRef, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

let windowWidth = Dimensions.get("window").width;

const Content = (props) => {
  let video = <View></View>;
  let image = <View></View>;

  if (props.content.image !== null) {
    imageWidth = Image.resolveAssetSource(props.content.image).width;
    imageHeight = Image.resolveAssetSource(props.content.image).height;

    image = (
      <Image
        style={{
          width: windowWidth,
          height: (windowWidth * imageHeight) / imageWidth,
        }}
        source={props.content.image}
      />
    );
  }

  if (props.content.video !== null) {
    video = (
      <YoutubePlayer
        width={windowWidth}
        height={(windowWidth * 9) / 16}
        videoId={props.content.video}
      />
    );
  }

  return <View>{image}{video}</View>;
};

const styles = StyleSheet.create({});

export default Content;
