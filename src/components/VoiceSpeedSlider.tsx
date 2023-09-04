import React from "react"
import { View, Text } from "react-native"
import Slider from '@react-native-community/slider'
import { styles } from "../ui/styles"
import { SpeedSliderProps } from "../types"

const VoiceSpeedSlider = (props: SpeedSliderProps) => 
{
    let { voiceSpeed, onSpeechSpeedChange } = props

    return (
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            {`Speed: ${voiceSpeed.toFixed(2)}`}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0.01}
            maximumValue={0.99}
            value={voiceSpeed}
            onSlidingComplete={onSpeechSpeedChange}
            step={0.1}
          />
        </View>
    )
}

export default VoiceSpeedSlider