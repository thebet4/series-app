import Colors from '@theme/Colors'
import { LightText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`
export const SchedulerText = styled(LightText)`
  color: ${Colors.Secondary.Light};
`
