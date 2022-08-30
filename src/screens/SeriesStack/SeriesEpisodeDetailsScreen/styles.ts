import Colors from '@theme/Colors'
import { BoldText, RegularText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${Colors.Secondary.Dark};
`

export const Background = styled.ImageBackground`
  width: 100%;
  height: 400px;
`
export const EpisodeName = styled(BoldText)`
  font-size: 32px;
`
export const LabelText = styled(RegularText)`
  font-size: 14px;
  margin-bottom: 24px;
`

export const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`
