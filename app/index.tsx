import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Slider from '@/components/Slider'	
import { ImageSlider } from '@/data/SliderData'

const page = () => {
  return (
    <View style={styles.container}>
        <Slider itemList={ImageSlider} />
    </View>
  )
}

export default page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})