import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import colors from "../constants/Colors";

const B = (props) => (
  <Text style={{ fontWeight: "bold", color: "white" }}>{props.children}</Text>
);

const PostInteractionCell = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.likedBy}>
        <TouchableOpacity>
          <Image
            source={require("../assets/doubleAvatar.png")}
            style={{
              width: 28,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.likedByText}>
            Liked by <B>maxb</B>, <B>jgyllenhaal</B>, and <B>1,391 others</B>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.comment}>
        <Image
          source={require("../assets/emmawatson.png")}
          style={{
            width: 24,
            height: 24,
            borderRadius: 70,
            marginLeft: 16,
            marginTop: 5,
          }}
        />
        <View style={styles.commentTextRow}>
          <View style={styles.commentText}>
            <Text
              style={{
                color: "#989998",
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              <B>Emma Watson </B>
            </Text>
            <Text
              style={{
                color: "#989998",
                fontSize: 10,
                paddingTop: 2,
              }}
            >
              10:10AM emma.watson
            </Text>
          </View>
          <Text
            style={{
              color: "#989998",
              fontSize: 12,
            }}
            numberOfLines = {3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            laoreet non curabitur gravida radipiscing elit, sed do eiusmod
            tempor incididunt ut laboe et doloe man aliq
          </Text>
        </View>
      </View>
      <View style={styles.moreCommentsView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/tripleAvatar.png")}
            style={{
              width: 40,
              height: 27,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.moreCommentsText}>202 more comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.regularBackground,
    width: "100%",
    justifyContent: "center",
  },
  likedBy: {
    backgroundColor: colors.regularBackground,
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  likedByText: {
    color: "#989998",
    paddingLeft: 7,
    fontSize: 12,
  },
  comment: {
    backgroundColor: colors.regularBackground,
    width: "100%",
    flexDirection: "row",
  },
  commentTextRow: {
    width: "83%",
    flexDirection: "column",
    paddingLeft: 10,
  },
  commentText: {
    flexDirection: "row",
  },
  moreCommentsView: {
    backgroundColor: colors.regularBackground,
    flexDirection: "row",
    width: "100%",
    paddingLeft: 16,
    paddingTop: 6,
    alignItems: "center",
  },
  moreCommentsText: {
    color: "#989998",
    paddingLeft: 8,
    fontSize: 12,
  },
  addComments: {
    backgroundColor: colors.regularBackground,
    width: "100%",
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  addCommentsText: {
    color: "#989998",
    marginLeft: 6,
    width: 250,
    marginRight: 12,
  },
});

export default PostInteractionCell;
