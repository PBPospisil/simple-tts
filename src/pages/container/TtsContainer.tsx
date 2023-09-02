import React from "react"
import TtsPresenter from "../presenter/TtsPresenter"

export interface SliderCallback {
    (value: number): void
}

const TtsContainer = () =>
{
    return (
        <TtsPresenter></TtsPresenter>
    )
}

export default TtsContainer