import 'react-native'
import React from 'react'
import VoiceSelectionList from '../src/components/VoiceSelectionList'
import {it} from '@jest/globals'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<VoiceSelectionList voices={undefined} selectedVoice={undefined} onVoicePress={undefined} />)
});