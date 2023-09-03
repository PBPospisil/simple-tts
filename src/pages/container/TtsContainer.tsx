import React, { useEffect, useState } from "react"
import TtsPresenter from "../presenter/TtsPresenter"
import { ReadTextCallback, SliderCallback, TtsStatus, VoiceSelectCallback } from "../../types"
import TtsService from "../../services/TtsService"

const TtsContainer = () =>
{
    const [text, setText] = useState('Enter Text')
    const [ttsStatus, setTtsStatus] = useState(TtsStatus.Initializing)
    const [voiceSpeed, setVoiceSpeed] = useState(0.5)
    const [voicePitch, setVoicePitch] = useState(1)
    const [voices, setVoices] = useState([])
    const [selectedVoice, setSelectedVoice] = useState(null)

    useEffect(() => {
        const ttsService = new TtsService()

        ttsService.addStartEventListener(setTtsStatus)
        ttsService.addFinishEventListener(setTtsStatus)
        ttsService.addCancelEventListener(setTtsStatus)
        
        ttsService.setDefaultSpeed(voiceSpeed)
        ttsService.setDefaultPitch(voicePitch)

        ttsService.getInitStatus().then(initTts)
        return () => {
            ttsService.removeStartEventListener(setTtsStatus)
            ttsService.removeFinishEventListener(setTtsStatus)
            ttsService.removeCancelEventListener(setTtsStatus)
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