import React from 'react'
import { Keyboard, TouchableOpacity, View } from 'react-native'
import { styles } from '../../ui/styles'
import VoiceSpeedSlider from '../../components/VoiceSpeedSlider'
import VoicePitchSlider from '../../components/VoicePitchSlider'
import VoiceSelectionList from '../../components/VoiceSelectionList'
import { TtsPresenterProps } from '../../types'
import VoiceText from '../../components/VoiceText'

const TtsPresenter = (props: TtsPresenterProps) => 
{
    let { textInputProps, 
          voiceSpeedSliderProps, 
          voicePitchSliderProps, 
          selectionListProps } = props
          
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={Keyboard.dismiss} 
                style={styles.textInputTouchable}
                activeOpacity={1} >
                <VoiceText
                    onReadText={textInputProps.onReadText} />
                <VoiceSpeedSlider 
                    voiceSpeed={voiceSpeedSliderProps.voiceSpeed} 
                    onSpeechSpeedChange={voiceSpeedSliderProps.onSpeechSpeedChange} />
                <VoicePitchSlider 
                    voicePitch={voicePitchSliderProps.voicePitch} 
                    onSpeechPitchChange={voicePitchSliderProps.onSpeechPitchChange} />
                <VoiceSelectionList 
                    voices={selectionListProps.voices} 
                    selectedVoice={selectionListProps.selectedVoice} 
                    onVoicePress={selectionListProps.onVoicePress} />
            </TouchableOpacity>
        </View>
    )
}

export default TtsPresenter