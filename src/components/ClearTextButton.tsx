import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ClearTextButtonProps } from "../types"

const ClearTextButton = (props: ClearTextButtonProps) =>
{
    let { onClearText } = props

    return (
        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={onClearText}>
            <Text style={styles.buttonTextStyle}>
                Clear text
            </Text>
        </TouchableOpacity>
    )
}

export default ClearTextButton