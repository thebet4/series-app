import Colors from '@theme/Colors'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  min-height: 100px;
  background-color: ${Colors.Secondary.Normal};
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  align-items: center;
  justify-content: space-around;
`

export const Wrapper = styled.View`
  background-color: ${Colors.Secondary.Dark};
`
