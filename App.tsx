import React from 'react';
import { SafeAreaView } from 'react-native'
import TtsContainer from './src/pages/container/TtsContainer'
import { styles } from './src/ui/styles'

function App(): JSX.Element 
{
  return (
    <SafeAreaView style={styles.container}>
      <TtsContainer></TtsContainer>
    </SafeAreaView>
  )
}

export default App
