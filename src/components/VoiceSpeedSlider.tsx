import React from "react"
import { View, Text } from "react-native"
import Slider from '@react-native-community/slider'
import { SliderCallback } from "../pages/container/TtsContainer"
import { styles } from "../ui/styles"

type SpeedSliderProps = {
    speed: number;
    setVoiceSpeed: SliderCallback;
}

const VoiceSpeedSlider = (props: SpeedSliderProps) => 
{
    let { speed, setVoiceSpeed } = props

    return (
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            {`Speed: ${speed.toFixed(2)}`}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0.01}
            maximumValue={0.99}
            value={speed}
            onSlidingComplete={setVoiceSpeed}
          />
        </View>
    )
}

export default VoiceSpeedSlider