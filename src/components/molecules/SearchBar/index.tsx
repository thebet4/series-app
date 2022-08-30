import Colors from '@theme/Colors'
import { SearchIcon } from '@theme/Svgs'
import React from 'react'

import { Container, Input } from './styles'

type SearchBarProps = {
  onSearch: (textToSearh: string) => void
  placeHolder: string
}

const SearchBar = ({ onSearch, placeHolder }: SearchBarProps) => {
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(() => {
    const searchTimeout = setTimeout(() => {
      onSearch(searchText)
    }, 1000)

    return () => clearTimeout(searchTimeout)
  }, [searchText])

  return (
    <Container>
      <SearchIcon width={32} height={32} color={Colors.Secondary.Normal} />
      <Input
        placeholder={placeHolder}
        onChangeText={(text: string) => setSearchText(text)}
        value={searchText}
      />
    </Container>
  )
}

export default SearchBar
