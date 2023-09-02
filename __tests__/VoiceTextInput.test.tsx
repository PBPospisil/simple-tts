import 'react-native'
import React from 'react'
import VoiceTextInput from '../src/components/VoiceTextInput'
import {it} from '@jest/globals'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<VoiceTextInput text={'test'} setText={() => {}} />)
});