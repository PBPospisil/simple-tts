import React from "react"
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { styles } from "../ui/styles"
import { SliderCallback } from "../pages/container/TtsContainer"

type PitchSliderProps = {
    pitch: number;
    setVoicePitch: SliderCallback;
}

const VoicePitchSlider = (props: PitchSliderProps) =>
{
    let { pitch, setVoicePitch } = props

    return (
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            {`Pitch: ${pitch.toFixed(2)}`}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2}
            value={pitch}
            onSlidingComplete={setVoicePitch}
          />
        </View>
    )
}

export default VoicePitchSlider