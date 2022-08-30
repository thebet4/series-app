import Colors from '@theme/Colors'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${Colors.Secondary.Normal};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.Secondary.Light
})`
  flex: 1;
  color: ${Colors.Secondary.Light};
`
