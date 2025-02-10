import { StyleSheet, Text, TouchableOpacityBase, View } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
const TasksCard = () => {
  let priority = "high";
  let task = "meeting";
  return (
    <View className=" w-[100%] border rounded-[20]	p-4">
      <View className="flex flex-row justify-between align-center my-2">
        <Text>TasksCard</Text>
        <SimpleLineIcons name="options" size={24} color="black" />
      </View>
      <View className="flex flex-row w-[35%]  align-center">
        <View
          className={`bg-${priority} rounded-[50%] p-1 px-4  flex-row justify-center`}
        >
          <Text>{priority}</Text>
        </View>
        <View
          className={`bg-[#e9a6ff] rounded-[50%] p-1 px-4 ml-3 flex-row justify-center`}
        >
          <Text>{task}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between align-center mt-5">
        <View className="flex-row justify-center align-center">
          <AntDesign name="calendar" size={16} color="black" />
          <Text className="ml-2">14 Nov 2024</Text>
        </View>

        <View className="flex flex-row justify-between align-center w-[25%]">
          <View className="flex-row justify-center align-center">
            <Ionicons name="link" size={22} color="black" />
            <Text className="mt-1 ml-1">2</Text>
          </View>
          <View className="flex-row justify-center align-center">
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={22}
              color="black"
            />
            <Text className="mt-1 ml-1">5</Text>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default TasksCard;

const styles = StyleSheet.create({});
