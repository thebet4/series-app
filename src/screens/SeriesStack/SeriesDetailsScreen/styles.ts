import Colors from '@theme/Colors'
import { BoldText, LightText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${Colors.Secondary.Dark};
`
export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.Secondary.Dark};
`

export const Content = styled.View`
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 100px;
  background-color: ${Colors.Secondary.Dark};
  min-height: 100px;
  width: 100%;
`
export const HeaderImage = styled.ImageBackground`
  width: 100%;
  height: 600px;
  justify-content: flex-end;
`
export const TitleText = styled(BoldText)`
  font-size: 48px;
  line-height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 48px;
`
export const LabelText = styled(BoldText)`
  font-size: 24px;
  margin-bottom: 12px;
`
export const InfoText = styled(LightText)`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.Secondary.Light};
  margin-bottom: 12px;
`
