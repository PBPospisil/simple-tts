import React from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../ui/styles'
import VoiceSpeedSlider from '../../components/VoiceSpeedSlider'
import VoicePitchSlider from '../../components/VoicePitchSlider'
import VoiceSelectionList from '../../components/VoiceSelectionList'
import { TtsPresenterProps } from '../../types'
import VoiceText from '../../components/VoiceText'

const TtsPresenter = ({ textInputProps, 
                        voiceSpeedSliderProps, 
                        voicePitchSliderProps, 
                        selectionListProps }: TtsPresenterProps) => 
{          
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={Keyboard.dismiss} 
                style={styles.textInputTouchable}
                activeOpacity={1} >
                <VoiceText
                    ttsStatus={textInputProps.ttsStatus}
                    onReadText={textInputProps.onReadText} />
                <VoiceSpeedSlider 
                    voiceSpeed={voiceSpeedSliderProps.voiceSpeed} 
                    onSpeechSpeedChange={voiceSpeedSliderProps.onSpeechSpeedChange} />
                <VoicePitchSlider 
                    voicePitch={voicePitchSliderProps.voicePitch} 
                    onSpeechPitchChange={voicePitchSliderProps.onSpeechPitchChange} />
                <Text 
                    style={styles.selectVoiceText}>
                    Select a voice
                </Text>
                <VoiceSelectionList 
                    voices={selectionListProps.voices} 
                    selectedVoice={selectionListProps.selectedVoice} 
                    onVoicePress={selectionListProps.onVoicePress} />
            </TouchableOpacity>
        </View>
    )
}

export default TtsPresenter