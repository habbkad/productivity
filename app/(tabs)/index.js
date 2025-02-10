import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressCard from "../../components/progressCard";
import {
  HoldBg,
  ProgressBg,
  CompleteBg,
  ReviewBg,
} from "../../components/images";
import { BarChart } from "react-native-gifted-charts";
import Trackcard from "../../components/trackCard";

const Home = () => {
  const barData = [
    { value: 90, label: "M" },
    { value: 30, label: "T", frontColor: "#177AD5" },
    { value: 25, label: "W", frontColor: "#177AD5" },
    { value: 20, label: "T" },
    { value: 60, label: "F", frontColor: "#177AD5" },
    { value: 56, label: "S" },
    { value: 30, label: "S" },
  ];
  return (
    <ScrollView>
      <SafeAreaView className="mx-3">
        <View className="mt-5 flex-row justify-between align-middle">
          <View>
            <Text className="">Dashboard</Text>
          </View>
          <View>
            <Feather name="bell" size={26} color="black" />
          </View>
        </View>

        <View className="mt-9">
          <Text className="">Project Summary</Text>
          <View className="mt-6 flex-row justify-between">
            <ProgressCard
              image={ProgressBg}
              progress={"In Progress"}
              number={9}
            />
            <ProgressCard image={ReviewBg} progress={"In Review"} number={9} />
          </View>
          <View className="mt-6 flex-row justify-between">
            <ProgressCard image={HoldBg} progress={"On Hold"} number={9} />
            <ProgressCard
              image={CompleteBg}
              progress={"Completed"}
              number={9}
            />
          </View>
          <View className="h-[1] my-4 bg-slate-300 w-[100%]"></View>
          <View className="w-[100%]">
            <Text className="my-2">Project Statistics</Text>
            <BarChart
              barWidth={20}
              height={175}
              barBorderRadius={7}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0.2}
              xAxisThickness={0.5}
            />
          </View>
          <View>
            <View className="mt-6 flex-row justify-between">
              <Trackcard
                title={"Total Working Hour"}
                data={"05:03:03"}
                percentage={`23`}
              />
              <Trackcard
                title={"Total Task Activity"}
                data={"125 Tasks"}
                percentage={`44`}
              />
            </View>
            
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
