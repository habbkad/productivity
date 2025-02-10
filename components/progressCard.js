import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const ProgressCard = ({ image, progress, number }) => {
  return (
    <ImageBackground
      source={image}
      imageStyle={{ borderRadius: 15, borderWidth: 1, borderColor: "black" }}
      className="h-[130] w-[200] border-1 border-solid border-black "
    >
      <View className="mt-4 mx-4">
        <Text className="my-4">{number}</Text>
        <Text> {progress}</Text>
      </View>
    </ImageBackground>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({});
