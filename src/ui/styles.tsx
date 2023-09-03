import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 5,
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
      backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
    },
    sliderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      padding: 5,
    },
    sliderLabel: {
      textAlign: 'center',
      marginRight: 20,
    },
    slider: {
      flex: 1,
    },
    textInput: {
      borderColor: 'gray',
      borderWidth: 1,
      color: 'white',
      width: '100%',
      textAlign: 'center',
      height: 40,
    },
    selectionList: {
      width: '100%',
      marginTop: 5
    }
  });