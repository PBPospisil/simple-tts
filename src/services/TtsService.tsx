import { Dispatch, SetStateAction } from "react"
import Tts from 'react-native-tts'
import { TtsEventListener, TtsStatus } from "../types"

const TtsService = () => 
{
    const getVoices = () =>
    {
        return Tts.voices()
    }

    const setDefaultLanguage = (language: string) =>
    {
        Tts.setDefaultLanguage(language)
    }

    const setDefaultVoice = (voice: string) =>
    {
        Tts.setDefaultVoice(voice)
    }

    const addStartEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.addEventListener(
            TtsEventListener.Start,
            (_event) => setTtsStatus(TtsStatus.Started)
        )
    }

    const addFinishEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.addEventListener(
            TtsEventListener.Finish,
            (_event) => setTtsStatus(TtsStatus.Finished)
        )
    }

    const addCancelEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.addEventListener(
            TtsEventListener.Cancel,
            (_event) => setTtsStatus(TtsStatus.Cancelled)
        )
    }

    const setDefaultSpeed = (speed: number) =>
    {
        Tts.setDefaultRate(speed)
    }

    const setDefaultPitch = (pitch: number) =>
    {
        Tts.setDefaultPitch(pitch)
    }

    const getInitStatus = (initTts: ((value: "success") => "success" | PromiseLike<"success">) | null | undefined) =>
    {
        Tts.getInitStatus().then(initTts)
    }

    const removeStartEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.removeEventListener(
            TtsEventListener.Start,
            (_event) => setTtsStatus(TtsStatus.Started)
        )
    }

    const removeFinishEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.removeEventListener(
            TtsEventListener.Finish,
            (_event) => setTtsStatus(TtsStatus.Finished),
        )
    }

    const removeCancelEventListener = (setTtsStatus: Dispatch<SetStateAction<TtsStatus>>) =>
    {
        Tts.removeEventListener(
            TtsEventListener.Cancel,
            (_event) => setTtsStatus(TtsStatus.Cancelled),
        )
    }

    const stopVoiceRead = () =>
    {
        Tts.stop()
    }

    const startVoiceRead = (text: string) =>
    {
        Tts.speak(text)
    }
}