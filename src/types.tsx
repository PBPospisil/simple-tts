import { Dispatch } from "react"
import { Voice } from "react-native-tts"

// Interfaces
export interface SliderCallback {
    (value: number): void
}

export interface ReadTextCallback {
    (): void
}

export interface VoiceSelectCallback {
    (voice: Voice): void
}

// Types
export type SpeedSliderProps = {
    voiceSpeed: number;
    onSpeechSpeedChange: SliderCallback;
}

export type PitchSliderProps = {
    voicePitch: number;
    onSpeechPitchChange: SliderCallback;
}

export type SelectionListProps = {
    voices: any;
    selectedVoice: any;
    onVoicePress: VoiceSelectCallback;
}

export type ListItemProps = {
    id: string;
    name: string;
    language: string;
}

export type TextInputProps = {
    text: string;
    setText: Dispatch<React.SetStateAction<string>>;
}

export type ReadTextButtonProps = {
    ttsStatus: TtsStatus;
    onReadText: ReadTextCallback;
}

export type TtsPresenterProps = {
    textInputProps: TextInputProps;
    readTextButtonProps: ReadTextButtonProps;
    voiceSpeedSliderProps: SpeedSliderProps;
    voicePitchSliderProps: PitchSliderProps;
    selectionListProps: SelectionListProps;
}

// Enums
export enum TtsStatus {
    Started = 'started',
    Finished = 'finished',
    Cancelled = 'cancelled',
    Initializing = 'initializing',
    Initialized = 'initialized'
}

export enum TtsEventListener {
    Start = 'tts-start',
    Finish = 'tts-finish',
    Cancel = 'tts-cancel'
}