import React from "react"
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { styles } from "../ui/styles"
import { PitchSliderProps } from "../types"

const VoicePitchSlider = (props: PitchSliderProps) =>
{
    let { voicePitch, onSpeechPitchChange } = props

    return (
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            {`Pitch: ${voicePitch.toFixed(1)}`}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0.51}
            maximumValue={1.99}
            value={voicePitch}
            onSlidingComplete={onSpeechPitchChange}
            step={0.1}
          />
        </View>
    )
}

export default VoicePitchSlider