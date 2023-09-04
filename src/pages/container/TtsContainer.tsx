import React, { useCallback, useEffect, useRef, useState } from "react"
import TtsPresenter from "../presenter/TtsPresenter"
import { ReadTextCallback, SliderCallback, TtsStatus, VoiceSelectCallback } from "../../types"
import { addCancelEventListener,
         addFinishEventListener,
         addStartEventListener,
         getInitStatus,
         getVoices,
         removeCancelEventListener,
         removeFinishEventListener,
         removeStartEventListener,
         setDefaultLanguage,
         setDefaultPitch,
         setDefaultSpeed,
         setDefaultVoice,
         startVoiceRead,
         stopVoiceRead } from "../../services/tts"
import { Voice } from "react-native-tts"
import { TextInput } from "react-native"

const TtsContainer = () =>
{
    const [text, setText] = useState('')
    const [ttsStatus, setTtsStatus] = useState<TtsStatus>(TtsStatus.Initializing)
    const [voiceSpeed, setVoiceSpeed] = useState<number>(0.5)
    const [voicePitch, setVoicePitch] = useState<number>(1)
    const [voices, setVoices] = useState<Voice[]>([])
    const [selectedVoice, setSelectedVoice] = useState<string>('')

    const inputRef = useRef<TextInput>(null)
    const editText = useCallback(() => {
      inputRef.current?.setNativeProps({text: ''})
    }, [])

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

    const initTts = async () =>
    {
        const voices: Voice[] = await getVoices()
        const availableVoices: Voice[] = voices
          .filter((v) => !v.networkConnectionRequired && !v.notInstalled)
          .map((v) => {
            return {id: v.id, name: v.name, language: v.language} as Voice
          })
        let selectedVoice: string = '';
        if (voices && voices.length > 0) {
          selectedVoice = voices[0].id
          try {
            await setDefaultLanguage(voices[0].language)
          } catch (err) {
            console.log(`setDefaultLanguage error `, err)
          }
          await setDefaultVoice(voices[0].id)
          setVoices(availableVoices)
          setSelectedVoice(selectedVoice) 
        }
        setTtsStatus(TtsStatus.Initialized)
    }
    
    const onReadText: ReadTextCallback = async (text: string) =>
    {
        stopVoiceRead()
        startVoiceRead(text)
    }

    const onSpeechSpeedChange: SliderCallback = async (speed) =>
    {
        await setDefaultSpeed(speed)
        setVoiceSpeed(speed)
    }
    
    const onSpeechPitchChange: SliderCallback = async (pitch) =>
    {
        await setDefaultPitch(pitch)
        setVoicePitch(pitch)
    }

    const onVoicePress: VoiceSelectCallback = async (voice) =>
    {
        try {
            await setDefaultLanguage(voice.language)
          } catch (err) {
            console.log(`setDefaultLanguage error `, err);
          }
          await setDefaultVoice(voice.id);
          setSelectedVoice(voice.id);
    }

    return (
        <TtsPresenter
            textInputProps={{ onReadText }}
            voiceSpeedSliderProps={{ voiceSpeed, onSpeechSpeedChange }}
            voicePitchSliderProps={{ voicePitch, onSpeechPitchChange }}
            selectionListProps={{ voices, selectedVoice, onVoicePress }} />
    )
}

export default TtsContainer