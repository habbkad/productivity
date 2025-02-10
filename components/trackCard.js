import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Trackcard({ title, data, percentage }) {
  return (
    <View className=" h-[85] w-[200] border rounded-lg	p-6 ">
      <Text>{title}</Text>
      <View className="flex flex-row">
        <Text className="mt-2">{data}</Text>
        <Text className="mt-2 ml-2 ">{percentage}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
