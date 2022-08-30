import { BoldText, RegularText } from '@theme/Fonts'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const CARD_WIDTH = Dimensions.get('screen').width * 0.8

export const TouchableArea = styled.TouchableOpacity`
  width: ${CARD_WIDTH}px;
  margin-right: 12px;
  margin-top: 24px;
`
export const Container = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 24
  }
})`
  width: ${CARD_WIDTH}px;
  height: 400px;
`
export const EpisodeNumber = styled(BoldText)`
  font-size: 32px;
`
export const EpisodeNameText = styled(RegularText)`
  font-size: 18px;
  margin-top: 12px;
`
