import React, { useEffect, useState } from "react"
import TtsPresenter from "../presenter/TtsPresenter"
import { ReadTextCallback, SliderCallback, TtsStatus, VoiceSelectCallback } from "../../types"
import { getVoices,
         setDefaultLanguage,
         setDefaultVoice,
         addStartEventListener,
         addFinishEventListener,
         addCancelEventListener,
         setDefaultSpeed,
         setDefaultPitch,
         getInitStatus,
         removeStartEventListener,
         removeFinishEventListener,
         removeCancelEventListener,
         stopVoiceRead,
         startVoiceRead } from "../../services/tts"

const TtsContainer = () =>
{
    const [text, setText] = useState('Enter Text')
    const [ttsStatus, setTtsStatus] = useState(TtsStatus.Initializing)
    const [voiceSpeed, setVoiceSpeed] = useState(0.5)
    const [voicePitch, setVoicePitch] = useState(1)
    const [voices, setVoices] = useState([])
    const [selectedVoice, setSelectedVoice] = useState(null)

    useEffect(() => {
        addStartEventListener(setTtsStatus)
        addFinishEventListener(setTtsStatus)
        addCancelEventListener(setTtsStatus)
        
        setDefaultSpeed(voiceSpeed)
        setDefaultPitch(voicePitch)

        getInitStatus().then(initTts)
        return () => {
            removeStartEventListener(setTtsStatus)
            removeFinishEventListener(setTtsStatus)
            removeCancelEventListener(setTtsStatus)
        }}, [])

    const initTts = async () => {}
    
    const onReadText: ReadTextCallback = async () => {}

    const onSpeechSpeedChange: SliderCallback = async (value) => {}
    
    const onSpeechPitchChange: SliderCallback = async (value) => {}

    const onVoicePress: VoiceSelectCallback = async (voice) => {}

    return (
        <TtsPresenter
            textInputProps={{ text, setText }}
            readTextButtonProps={{ ttsStatus, onReadText }}
            voiceSpeedSliderProps={{ voiceSpeed, onSpeechSpeedChange }}
            voicePitchSliderProps={{ voicePitch, onSpeechPitchChange }}
            selectionListProps={{ voices, selectedVoice, onVoicePress }} />
    )
}

export default TtsContainer