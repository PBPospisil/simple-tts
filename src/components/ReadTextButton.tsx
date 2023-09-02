import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ReadTextButtonProps } from "../types"

const ReadTextButton = (props: ReadTextButtonProps) => 
{
    let { ttsStatus, readText } = props
    return (
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={readText}>
          <Text style={styles.buttonTextStyle}>
            Click to Read Text ({`Status: ${ttsStatus || ''}`})
          </Text>
        </TouchableOpacity>
    )
}

export default ReadTextButton