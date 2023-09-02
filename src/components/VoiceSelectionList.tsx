import React from "react"
import { FlatList, Text, TouchableOpacity } from "react-native"
import { styles } from "../ui/styles"
import { ListItemProps, SelectionListProps } from "../types"

const VoiceSelectionList = (props: SelectionListProps) =>
{
    let { voices, selectedVoice, onVoicePress } = props

    const VoiceListItem = (item: ListItemProps) =>
    (
      <TouchableOpacity
        style={{ backgroundColor: selectedVoice === item.id ? '#DDA0DD' : '#5F9EA0' }}
        onPress={() => onVoicePress(item)}>
        <Text style={styles.buttonTextStyle}>
          {`${item.language} - ${item.name || item.id}`}
        </Text>
      </TouchableOpacity>
    )
    return (
        <FlatList
          style={styles.selectionList}
          keyExtractor={(item: ListItemProps) => item.id}
          renderItem={({ item }) => 
            <VoiceListItem 
                id={item.id}
                name={item.name}
                language={item.language}/>
          }
          extraData={selectedVoice}
          data={voices}
        />
    )
}

export default VoiceSelectionList