import { TextInputCallback } from "./pages/container/TtsContainer";

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