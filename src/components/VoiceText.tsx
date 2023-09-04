import React, { useState } from "react"
import { TextInput, Keyboard, View, TouchableOpacity, Text } from "react-native"
import { styles } from "../ui/styles"
import { VoiceTextProps } from "../types"
import ClearTextButton from "./ClearTextButton"
import ReadTextButton from "./ReadTextButton"

const VoiceText = (props: VoiceTextProps) =>
{
    let { onReadText } = props
    const [text, setText] = useState<string>('')

    const onClearText = () => 
    {
      setText('')
    }

    return (
        <View>
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            style={styles.textInput}
            placeholder={'Enter text'}
            placeholderTextColor={'black'}
            scrollEnabled={true}
            returnKeyType="done"
          />
          <ClearTextButton 
            onClearText={onClearText}
          />
          <ReadTextButton 
            text={text}
            onReadText={onReadText}
          />
      </View>
    )
}

export default VoiceText