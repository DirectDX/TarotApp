import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageSourcePropType,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { DecksData } from "@/data/SliderData";
  import {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
  } from "react-native-reanimated";
  import Animated from "react-native-reanimated";
  
  type Props = {
    item: DecksData;
    index: number;
  };
  
  const { width } = Dimensions.get("window");
  
  const SliderItem = ({ item, index }: Props) => {
    const [deckClicked, setDeckClicked] = useState(false);
    const [randomCard, setRandomCard] = useState<{
      title: string;
      text: string;
      image: ImageSourcePropType;
    } | null>(null);
  
    const handlePress = () => {
      const randomIndex = Math.floor(Math.random() * item.cards.length);
      setRandomCard(item.cards[randomIndex]);
      setDeckClicked(true);
    }
  
  
    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={handlePress}
        >
          <Image
            source={!deckClicked ? item.image : randomCard?.image}
            style={styles.image}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.4)"]}
            style={styles.background}
          >
            <View>
              <Text>{item.deckName}</Text>
            </View>
            <Text>{item.description}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SliderItem;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      width: width,
    },
    image: {
      borderRadius: 20,
      width: 300,
      height: 500,
    },
    background: {
      position: "absolute",
      width: 300,
      height: 500,
      padding: 20,
      borderRadius: 20,
      justifyContent: "space-between",
    },
  });
  