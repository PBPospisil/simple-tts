// Interfaces
export interface SliderCallback {
    (value: number): void
}

export interface TextInputCallback {
    (text: string): void
}

export interface ReadTextCallback {
    (): void
}

// Types
export type SelectionListProps = {
    voices: any;
    selectedVoice: any;
    onVoicePress: any;
}

export type ListItemProps = {
    id: string;
    name: string;
    language: string;
}

export type TextInputProps = {
    text: string;
    setText: TextInputCallback;
}

export type ReadTextButtonProps = {
    ttsStatus: TtsStatus;
    readText: ReadTextCallback;
}

// Enums
export enum TtsStatus {
    Started = 'started',
    Finished = 'finished',
    Cancelled = 'cancelled'
}