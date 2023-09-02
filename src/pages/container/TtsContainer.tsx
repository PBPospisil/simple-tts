import React from "react"
import TtsPresenter from "../presenter/TtsPresenter"

export interface SliderCallback {
    (value: number): void
}

export interface TextInputCallback {
    (text: string): void
}

const TtsContainer = () =>
{
    return (
        <TtsPresenter></TtsPresenter>
    )
}

export default TtsContainer