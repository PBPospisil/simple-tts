import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ReadTextButtonProps, TtsStatus } from "../types"

const ReadTextButton = ({ ttsStatus, text, onReadText }: ReadTextButtonProps) => 
{
    const isDisabled = (): boolean => 
    {
      return ttsStatus == TtsStatus.Started
    }

    return (
        <TouchableOpacity
          style={[ !isDisabled() ? styles.buttonStyle : styles.disabledButtonStyle ]}
          onPress={() => onReadText(text)}
          disabled={isDisabled()}>
          <Text style={styles.buttonTextStyle}>
            Read text
          </Text>
        </TouchableOpacity>
    )
}

export default ReadTextButton