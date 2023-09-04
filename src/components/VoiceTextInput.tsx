import React from "react"
import { TextInput, Keyboard } from "react-native"
import { styles } from "../ui/styles"
import { TextInputProps } from "../types"

const VoiceTextInput = (props: TextInputProps) =>
{
    let { text, setText } = props
    return (
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder={'Enter text'}
          placeholderTextColor={'black'}
          onSubmitEditing={Keyboard.dismiss}
          multiline={true}
          scrollEnabled={true}
        />
    )
}

export default VoiceTextInput