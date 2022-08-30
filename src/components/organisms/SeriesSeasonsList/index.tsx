import SeriesSeassonCard from '@components/molecules/SeriesSeassonCard'
import { getSeriesSeasonsResponse } from '@utils/interfaces/series'
import React from 'react'
import { FlatList } from 'react-native'

type SeriesSeasonsListProps = {
  data: getSeriesSeasonsResponse[]
  onSelectSeasson: (seassonId: string, seassonName: string) => void
}

const SeriesSeasonsList = ({ data, onSelectSeasson }: SeriesSeasonsListProps) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <SeriesSeassonCard
          onSelectSeasson={onSelectSeasson}
          seassonNumber={item.number}
          image={item.image?.medium}
          seassonId={item.id}
        />
      )}
    />
  )
}

export default SeriesSeasonsList
