import React, { FC, useState } from 'react'
import PropsType from 'prop-types'
import { Props } from './types'

const main: FC<Props> = ({ labelOn, labelOff }) => {
  const [isChecked, updateChecked] = useState(false)

  const handleChange = () => {
    updateChecked(!isChecked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  )
}

main.propTypes = {
  labelOn: PropsType.string.isRequired,
  labelOff: PropsType.string.isRequired,
}

export default main
