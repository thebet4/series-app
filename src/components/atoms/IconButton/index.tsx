import Colors from '@theme/Colors'
import { SearchIcon } from '@theme/Svgs'
import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

type IconButtonProps = {
  onPress?: () => void
  Icon?: {
    width: number
    height: number
    color: string
    IconComponent: React.ElementType
  }
  style?: ViewStyle
}

const IconButton = (
  { Icon, onPress, style }: IconButtonProps = {
    Icon: { color: Colors.Base.Lightest, height: 32, width: 32, IconComponent: SearchIcon },
    onPress: () => {},
    style: {}
  }
) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {Icon && <Icon.IconComponent width={Icon.width} height={Icon.height} color={Icon.color} />}
    </TouchableOpacity>
  )
}

export default IconButton
