import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ReadTextButtonProps } from "../types"

const ReadTextButton = (props: ReadTextButtonProps) => 
{
    let { ttsStatus, onReadText } = props
    return (
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onReadText}>
          <Text style={styles.buttonTextStyle}>
            Click to Read Text ({`Status: ${ttsStatus || ''}`})
          </Text>
        </TouchableOpacity>
    )
}

export default ReadTextButton