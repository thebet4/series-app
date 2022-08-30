import { BoldText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const TouchableArea = styled.TouchableOpacity`
  width: 150px;
  height: 200px;
  padding-right: 12px;
  margin-right: 12px;
`
export const Container = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 12
  }
})`
  width: 150px;
  height: 200px;
`
export const SeassonText = styled(BoldText)`
  font-size: 16px;
`
