import SeriesCard from '@components/molecules/SeriesCard'
import Colors from '@theme/Colors'
import { GetSeriesResponse } from '@utils/interfaces/series'
import React from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

type SeriesListProps = {
  data: GetSeriesResponse[]
  onRefresh: () => void
  onLoadMore: () => void
  onSelect: (serieId: string) => void
}

const SeriesList = ({ data, onLoadMore, onRefresh, onSelect }: SeriesListProps) => {
  const [isRefreshing, setIsRefreshing] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLoadMode = () => {
    setIsLoading(true)
    onLoadMore()
    setIsLoading(false)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    onRefresh()
    setIsRefreshing(false)
  }

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onRefresh={handleRefresh}
      refreshing={isRefreshing}
      onEndReached={() => {
        if (!isLoading) {
          handleLoadMode()
        }
      }}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => {
        return (
          <SeriesCard
            average={item?.rating?.average}
            id={item.id}
            image={item?.image?.original || ''}
            title={item.name}
            onSelect={onSelect}
          />
        )
      }}
      ListFooterComponent={() =>
        isLoading ? (
          <View
            style={{
              width: '100%',
              height: 100
            }}
          >
            <ActivityIndicator size='large' color={Colors.Primary.Normal} />
          </View>
        ) : (
          <></>
        )
      }
    />
  )
}

export default SeriesList
