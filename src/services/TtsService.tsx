import { Component, Dispatch, SetStateAction } from "react"
import Tts from 'react-native-tts'
import { TtsEventListener, TtsStatus } from "../types"

class TtsService extends Component<void>
{
    getVoices()
    {
        return Tts.voices()
    }

    setDefaultLanguage(language: string)
    {
        Tts.setDefaultLanguage(language)
    }

    setDefaultVoice(voice: string)
    {
        Tts.setDefaultVoice(voice)
    }

    addStartEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.addEventListener(
            TtsEventListener.Start,
            (_event) => setTtsStatus(TtsStatus.Started)
        )
    }

    addFinishEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.addEventListener(
            TtsEventListener.Finish,
            (_event) => setTtsStatus(TtsStatus.Finished)
        )
    }

    addCancelEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.addEventListener(
            TtsEventListener.Cancel,
            (_event) => setTtsStatus(TtsStatus.Cancelled)
        )
    }

    setDefaultSpeed(speed: number)
    {
        Tts.setDefaultRate(speed)
    }

    setDefaultPitch(pitch: number)
    {
        Tts.setDefaultPitch(pitch)
    }

    getInitStatus(): Promise<"success">
    {
        return Tts.getInitStatus()
    }

    removeStartEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.removeEventListener(
            TtsEventListener.Start,
            (_event) => setTtsStatus(TtsStatus.Started)
        )
    }

    removeFinishEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.removeEventListener(
            TtsEventListener.Finish,
            (_event) => setTtsStatus(TtsStatus.Finished),
        )
    }

    removeCancelEventListener(setTtsStatus: Dispatch<SetStateAction<TtsStatus>>)
    {
        Tts.removeEventListener(
            TtsEventListener.Cancel,
            (_event) => setTtsStatus(TtsStatus.Cancelled),
        )
    }

    stopVoiceRead()
    {
        Tts.stop()
    }

    startVoiceRead(text: string)
    {
        Tts.speak(text)
    }
}

export default TtsService