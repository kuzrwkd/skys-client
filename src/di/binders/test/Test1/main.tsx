import React, { FC } from 'react'
import { Props } from './types'
import PropsType from 'prop-types'

const main: FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

main.propTypes = {
  title: PropsType.string.isRequired,
}

export default main
