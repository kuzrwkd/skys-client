import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import {
  classnames,
  cursor,
  display,
  textColor,
  margin,
  backgroundColor,
  borderRadius,
  padding,
} from 'tailwindcss-classnames';

import CrossIcon from '../static/icon/cross.svg';
import SearchIcon from '../static/icon/search.svg';

const classes = {
  searchIconWrap: (value: boolean) => classnames(display({ ['hidden']: value })),
  searchIcon: classnames(textColor('text-gray-500'), cursor('cursor-pointer')),
  searchForm: (value: boolean) => classnames(display('flex', { ['hidden']: !value })),
  closeIcon: classnames(textColor('text-gray-500', cursor('cursor-pointer')), margin('mr-1')),
  submitButton: classnames(
    backgroundColor('bg-blue-800'),
    textColor('text-white'),
    borderRadius('rounded-md'),
    padding('px-2'),
    margin('ml-2'),
  ),
};

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
        <div className={classes.searchIconWrap(state.isSearchActive)}>
          <SearchIcon className={classes.searchIcon} onClick={searchActiveHandler} />
        </div>
      )}
      <form onSubmit={submitHandler} className={classes.searchForm(state.isSearchActive)}>
        {displayForm ? '' : <CrossIcon className={classes.closeIcon} onClick={resetHandler} />}
        <input
          className="w-72 border-b border-gray-300"
          type="text"
          placeholder="Search..."
          value={state.q}
          onChange={changeHandler}
        />
        <button className={classes.submitButton} type="submit">
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
