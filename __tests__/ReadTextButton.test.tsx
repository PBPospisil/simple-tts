import 'react-native'
import React from 'react'
import ReadTextButton from '../src/components/ReadTextButton'
import {it} from '@jest/globals'
import renderer from 'react-test-renderer'
import { TtsStatus } from '../src/types'

it('renders correctly', () => {
  renderer.create(<ReadTextButton ttsStatus={TtsStatus.Started} readText={() => {}} />)
});