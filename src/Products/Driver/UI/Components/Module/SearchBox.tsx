/**
 * React
 */
import React, { FC, useState } from 'react';

/**
 * Next
 */
import { useRouter } from 'next/router';

/**
 * Lib
 */
import PropTypes from 'prop-types';
import classNames from 'tailwindcss-classnames';

/**
 * Svg
 */
import CrossIcon from '@/Products/Driver/UI/Icon/cross.svg';
import SearchIcon from '@/Products/Driver/UI/Icon/search.svg';

const SearchBox: FC<Props> = ({ isSearchActive, searchIconHandler }) => {
  const router = useRouter();
  const [state, setState] = useState({ q: '' });

  const method = {
    changeHandler(e: any) {
      const query = e.target.value;
      setState({ ...state, q: query });
    },
    reset() {
      setState({ q: '' });
    },
    submit(e: any): void {
      e.preventDefault();
      router.push(`/search?q=${state.q}`);
    },
  };

  return (
    <>
      <div className={classNames('ml-4', { ['hidden']: isSearchActive })} onClick={searchIconHandler}>
        <SearchIcon className="cursor-pointer" />
      </div>
      <form onSubmit={method.submit} className={classNames('flex', 'ml-4', { ['hidden']: !isSearchActive })}>
        <CrossIcon
          className="cursor-pointer mr-1"
          onClick={() => {
            searchIconHandler();
            method.reset();
          }}
        />
        <input
          className="w-72 border-b"
          type="text"
          placeholder="Search..."
          value={state.q}
          onChange={method.changeHandler}
        />
        <button className="bg-blue-800 text-white rounded-md px-2 ml-2" type="submit">
          検索
        </button>
      </form>
    </>
  );
};

/**
 * Types
 */
type Props = {
  isSearchActive: boolean;
  searchIconHandler: () => void;
};

SearchBox.propTypes = {
  isSearchActive: PropTypes.bool.isRequired,
  searchIconHandler: PropTypes.func.isRequired,
};

export default SearchBox;
