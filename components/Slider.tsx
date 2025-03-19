import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import React from "react";
import { DecksData } from "@/data/SliderData";
import SliderItem from "./SliderItem";

type Props = {
  itemList: DecksData[];
};

const Slider = ({ itemList }: Props) => {
  

  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
