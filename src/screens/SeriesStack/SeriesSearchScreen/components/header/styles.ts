import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-top: ${Platform.OS === 'android' ? '24px' : '48px'};
  padding-left: 24px;
  padding-right: 24px;
`
