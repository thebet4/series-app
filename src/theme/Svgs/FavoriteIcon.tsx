import IIconProps from '@utils/interfaces/Icons'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'

export default function FavoriteIcon({ color = '#FFFFFF', ...props }: IIconProps) {
  return (
    <Svg width='32' height='32' viewBox='0 0 96 96'>
      <G>
        <Path
          d='M 7.486 13.502 c 9.982 -9.982 26.165 -9.982 36.147 0 L 45 14.869 l 0 0 c 6.895 22.882 6.259 47.092 0 72.294 L 26.927 69.089 c 0 0 0 0 0 0 l -19.44 -19.44 C -2.495 39.667 -2.495 23.484 7.486 13.502 z'
          transform=' matrix(1 0 0 1 0 0) '
          stroke-linecap='round'
          fill={color}
        />
        <Path
          d='M 82.514 13.502 c -9.982 -9.982 -26.165 -9.982 -36.147 0 L 45 14.869 l 0 0 v 72.294 l 18.073 -18.073 c 0 0 0 0 0 0 l 19.44 -19.44 C 92.495 39.667 92.495 23.484 82.514 13.502 z'
          transform=' matrix(1 0 0 1 0 0) '
          stroke-linecap='round'
          fill={color}
        />
      </G>
    </Svg>
  )
}
