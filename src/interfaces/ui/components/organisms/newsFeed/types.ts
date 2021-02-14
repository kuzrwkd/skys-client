import React from 'react'
import { RssData } from '@/domains/services/feedParser/types'

export type Props = {
  children?: React.ReactNode
  data: RssData[]
  logoHeight: number
}
