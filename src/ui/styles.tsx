import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 10,
      paddingHorizontal: 10,
      paddingBottom: 4,
      backgroundColor: 'white',
    },
    titleText: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonStyle: {
      justifyContent: 'center',
      marginTop: 15,
      padding: 10,
      backgroundColor: 'azure',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
    },
    disabledButtonStyle: {
      justifyContent: 'center',
      marginTop: 15,
      padding: 10,
      backgroundColor: 'gainsboro',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
    },
    buttonTextStyle: {
      color: 'black',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500'
    },
    voiceItemText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
    },
    sliderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 15,
    },
    sliderLabel: {
      textAlign: 'center',
      marginRight: 20,
      color: 'black',
      fontSize: 16
    },
    slider: {
      flex: 1,
    },
    textInput: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      height: 80,
      fontSize: 20,
      padding: 20,
      color: 'black',
      fontWeight: '400'
    },
    textInputTouchable: {
      flex: 1,
    },
    selectionList: {
      marginTop: 4,
      marginBottom: 10,
    },
    voiceListItemDefault: {
      backgroundColor: 'white',
      padding: 4,
      borderColor: 'black',
      borderBottomWidth: 1,
    },
    voiceListItemSelected: {
      backgroundColor: 'aquamarine',
      padding: 4,
      borderColor: 'black',
      borderBottomWidth: 1,
    },
    selectVoiceText: { 
      fontWeight: "600", 
      fontSize: 20, 
      height: 20, 
      marginTop: 16, 
      marginBottom: 4, 
      color: 'black', 
      alignSelf: 'center'
    }
  });