/**
 * React
 */
import { FC, useState } from 'react';

/**
 * Next
 */
import { useRouter } from 'next/router';

/**
 * Lib
 */
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
      <div className={classNames({ ['hidden']: isSearchActive })} onClick={searchIconHandler}>
        <SearchIcon className="text-gray-500 cursor-pointer" />
      </div>
      <form onSubmit={method.submit} className={classNames('flex', { ['hidden']: !isSearchActive })}>
        <CrossIcon
          className="text-gray-500 cursor-pointer mr-1"
          onClick={() => {
            searchIconHandler();
            method.reset();
          }}
        />
        <input
          className="w-72 border-b border-gray-300"
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

export default SearchBox;
