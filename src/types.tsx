import { Dispatch, RefObject, SetStateAction } from "react"
import { TextInput } from "react-native"
import { Voice } from "react-native-tts"

// Interfaces
export interface SliderCallback {
    (value: number): void
}

export interface ReadTextCallback {
    (text: string): void
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

export type VoiceTextProps = {
    onReadText: ReadTextCallback;
}

export type ReadTextButtonProps = {
    text: string;
    onReadText: ReadTextCallback;
}

export type ClearTextButtonProps = {
    onClearText: () => void;
}

export type TtsPresenterProps = {
    textInputProps: VoiceTextProps;
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