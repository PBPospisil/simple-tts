import 'react-native'
import React from 'react'
import {it} from '@jest/globals'
import renderer from 'react-test-renderer'
import VoiceText from '../src/components/VoiceText'

it('renders correctly', () => {
  renderer.create(<VoiceText onReadText={() => {}} />)
});