import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ReadTextButtonProps } from "../types"

const ReadTextButton = (props: ReadTextButtonProps) => 
{
    let { text, onReadText } = props
    return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onReadText(text)}>
          <Text style={styles.buttonTextStyle}>
            Read text
          </Text>
        </TouchableOpacity>
    )
}

export default ReadTextButton