import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import TasksCard from "../../components/tasksCard";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Task = () => {
  return (
    <SafeAreaView>
      <View>
        <Priorities />
      </View>
      <View className="px-[5%]">
        <TasksCard />
      </View>
    </SafeAreaView>
  );
};

let DATA = ["Completed", "To do", "In Review"];
const Item = ({ title }) => (
  <TouchableOpacity
    className={
      "border rounded-[50%] px-4 py-1 flex-row justify-between align-middle ml-5"
    }
  >
    <View className={` rounded-[50%] p-1 px-2 ml-3 flex-row justify-center`}>
      <Text>{title}</Text>
    </View>

    <View
      className={`bg-[#e9a6ff] rounded-[50%] p-1 px-2 ml-3 flex-row justify-center`}
    >
      <Text>4</Text>
    </View>
  </TouchableOpacity>
);
const Priorities = () => {
  return (
    <FlatList
      className={`my-5`}
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Item title={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Task;

const styles = StyleSheet.create({});
