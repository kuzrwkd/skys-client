/**
 * React
 */
import React, { FC } from 'react';

/**
 * Lib
 */
import PropTypes from 'prop-types';
import classNames from 'tailwindcss-classnames';

/**
 * Svg
 */
import CrossIcon from '@/Products/Driver/UI/Icon/cross.svg';

const SearchBox: FC<Props> = ({ action, method, isSearchActive, searchIconHandler }) => {
  return (
    <form action={action} method={method} className={classNames('flex', 'ml-4', { ['hidden']: !isSearchActive })}>
      <CrossIcon className="mr-1" onClick={searchIconHandler} />
      <input className="w-72 border-b" type="text" placeholder="Search..." name="q" />
      <button className="bg-blue-800 text-white rounded-md px-2 ml-2" type="submit">
        検索
      </button>
    </form>
  );
};

/**
 * Types
 */
type Props = {
  action: string;
  method: string;
  isSearchActive: boolean;
  searchIconHandler: () => void;
};

SearchBox.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  isSearchActive: PropTypes.bool.isRequired,
  searchIconHandler: PropTypes.func.isRequired,
};

export default SearchBox;
