import { BoldText } from '@theme/Fonts'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const SCREEN_HEIGHT = Dimensions.get('screen').height

export const Container = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 48
  }
})`
  width: 100%;
  align-self: center;
  height: ${SCREEN_HEIGHT * 0.6}px;
  justify-content: flex-end;
`
export const TouchableArea = styled.TouchableOpacity`
  width: 100%;
  height: 480px;
  margin-bottom: 24px;
`

export const TitleText = styled(BoldText)`
  font-size: 32px;
`
export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
