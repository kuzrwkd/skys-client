import React, { FC, useState } from 'react'
import { Props } from './types'
import PropsType from 'prop-types'

const main: FC<Props> = ({ children, page }) => {
  const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
  }

  const [state, update] = useState({
    class: STATUS.NORMAL,
  })

  const onMouseEnter = () => {
    update({ class: STATUS.HOVERED })
  }

  const onMouseLeave = () => {
    update({ class: STATUS.NORMAL })
  }

  return (
    <a
      className={state.class}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

main.propTypes = {
  page: PropsType.string.isRequired,
}

export default main
