import Colors from '@theme/Colors'
import { BoldText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${Colors.Secondary.Dark};
`

export const Content = styled.View`
  padding: 24px;
`

export const SeassonText = styled(BoldText)`
  font-size: 32px;
  color: ${Colors.Secondary.Light};
`
