import EpisodeCard from '@components/molecules/EpisodeCard'
import { getEpisodesBySeasons } from '@utils/interfaces/series'
import React from 'react'
import { FlatList } from 'react-native'

type EpisodeListProps = {
  data: getEpisodesBySeasons[]
  onSelectEpisode: (episodeId: string) => void
}

const EpisodeList = ({ data, onSelectEpisode }: EpisodeListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <EpisodeCard episode={item} onSelectEpisode={onSelectEpisode} />}
    />
  )
}

export default EpisodeList
