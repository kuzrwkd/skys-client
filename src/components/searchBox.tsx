import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { classnames, display } from 'tailwindcss-classnames';

import CrossIcon from '../static/icon/cross.svg';
import SearchIcon from '../static/icon/search.svg';

const SearchBox: FC<Props> = ({ redirect, displayForm = false }) => {
  const router = useRouter();
  const [state, setState] = useState({ q: '', isSearchActive: displayForm });

  const searchActiveHandler = () => {
    setState({ ...state, isSearchActive: true });
  };

  const changeHandler = (e: any) => {
    const query = e.target.value;
    setState({ ...state, q: query });
  };

  const resetHandler = () => {
    setState({ ...state, q: '', isSearchActive: false });
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();
    router.push(`/${redirect}?q=${state.q}`);
  };

  return (
    <>
      {displayForm ? (
        ''
      ) : (
        <div className={classnames(display({ ['hidden']: state.isSearchActive }))}>
          <SearchIcon className="text-gray-500 cursor-pointer" onClick={searchActiveHandler} />
        </div>
      )}
      <form onSubmit={submitHandler} className={classnames(display('flex', { ['hidden']: !state.isSearchActive }))}>
        {displayForm ? '' : <CrossIcon className="text-gray-500 cursor-pointer mr-1" onClick={resetHandler} />}
        <input
          className="w-72 border-b border-gray-300"
          type="text"
          placeholder="Search..."
          value={state.q}
          onChange={changeHandler}
        />
        <button className="bg-blue-800 text-white rounded-md px-2 ml-2" type="submit">
          検索
        </button>
      </form>
    </>
  );
};

type Props = {
  redirect: string;
  displayForm?: boolean;
};

export default SearchBox;
