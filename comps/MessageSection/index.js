import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from '../Text';
import Avatar from "../Avatar";

const MessageSection = ({ name, messageContent, time, onPress, userAvatar}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.hr} />
      <View style={styles.messagecont}>
        <View style={styles.avatar}>
          <Avatar thumbnail_link={userAvatar} dim={38}/>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{messageContent}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  switch: {
    width: 65,
    height: 37
  },
  avatar: {
    marginTop: 15
  },
  messagecont: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    minHeight: 80,
    paddingBottom: 20
  },
  name: {
    width: 200,
    height: 100,
    fontFamily:"Ubuntu-Bold",
    marginLeft: 10,
    marginTop: 20
  },
  hr: {
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 3,
    width: 322.06
  },
  text: {
    marginTop: -60,
    marginLeft: 10,
    fontFamily:"Ubuntu-Light"
  },
  time: {
    marginTop: 20,
    color: "#BDBDBD",
    width: "25%",
    fontFamily:"Ubuntu-Light"
  }
});

MessageSection.defaultProps = {
  name: "name goes here",
  messageContent: "message content goes here",
  time: "00:00 AM"
};

export default MessageSection;
