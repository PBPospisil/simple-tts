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
            {`Pitch: ${voicePitch.toFixed(2)}`}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2}
            value={voicePitch}
            onSlidingComplete={onSpeechPitchChange}
          />
        </View>
    )
}

export default VoicePitchSlider