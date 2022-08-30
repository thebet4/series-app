import SearchBar from '@components/molecules/SearchBar'
import React from 'react'

import { Container } from './styles'

type HeaderProps = { onSearch: (textToSearch: string) => void; placeHolder: string }

const Header = (
  { onSearch, placeHolder }: HeaderProps = {
    onSearch: (textToSearch: string) => {},
    placeHolder: 'Type Something!'
  }
) => {
  return (
    <Container>
      <SearchBar placeHolder={placeHolder} onSearch={onSearch} />
    </Container>
  )
}

export default Header
