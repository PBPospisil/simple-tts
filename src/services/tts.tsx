import { Component, Dispatch, SetStateAction } from "react"
import Tts from 'react-native-tts'
import { TtsEventListener, TtsStatus } from "../types"

export const getVoices = () =>
{
    return Tts.voices()
}

export const setDefaultLanguage = (language: string) =>
{
    Tts.setDefaultLanguage(language)
}

export const setDefaultVoice = (voice: string) =>
{
    Tts.setDefaultVoice(voice)
}

export const addStartEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.addEventListener(
        TtsEventListener.Start,
        (_event) => setTtsStatus(TtsStatus.Started)
    )
}

export const addFinishEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.addEventListener(
        TtsEventListener.Finish,
        (_event) => setTtsStatus(TtsStatus.Finished)
    )
}

export const addCancelEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.addEventListener(
        TtsEventListener.Cancel,
        (_event) => setTtsStatus(TtsStatus.Cancelled)
    )
}

export const setDefaultSpeed = (speed: number) =>
{
    Tts.setDefaultRate(speed)
}

export const setDefaultPitch = (pitch: number) =>
{
    Tts.setDefaultPitch(pitch)
}

export const getInitStatus = (): Promise<"success"> =>
{
    return Tts.getInitStatus()
}

export const removeStartEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.removeEventListener(
        TtsEventListener.Start,
        (_event) => setTtsStatus(TtsStatus.Started)
    )
}

export const removeFinishEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.removeEventListener(
        TtsEventListener.Finish,
        (_event) => setTtsStatus(TtsStatus.Finished),
    )
}

export const removeCancelEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
{
    Tts.removeEventListener(
        TtsEventListener.Cancel,
        (_event) => setTtsStatus(TtsStatus.Cancelled),
    )
}

export const stopVoiceRead = () =>
{
    Tts.stop()
}

export const startVoiceRead = (text: string) =>
{
    Tts.speak(text)
}