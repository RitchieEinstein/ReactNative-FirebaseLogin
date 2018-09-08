import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = style;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const style = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "#A8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingtop: 15,
    shadowColor: "#550",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  }
};

export { Header };
