/**
 * React
 */
import React, { useState } from 'react';

/**
 * Next
 */
import Image from 'next/image';

/**
 * Lib
 */
import PropTypes from 'prop-types';
import classNames from 'tailwindcss-classnames';

/**
 * Components
 */
import DefaultMeta from '@/Products/Driver/UI/Components/Meta/default.meta';

/**
 * SVG
 */
import MenuIcon from '@/Products/Driver/UI/Icon/menu.svg';
import SearchIcon from '@/Products/Driver/UI/Icon/search.svg';
import CrossIcon from '@/Products/Driver/UI/Icon/cross.svg';

/**
 * Component
 * @param children
 * @param title
 * @param description
 * @constructor
 */
const DefaultLayout: React.FC<Props> = ({ children, title, description }) => {
  const [state, setState] = useState({
    isMenuOpen: true,
    isSearchActive: false,
  });

  const menuIconHandler = (): void => {
    const newState = Object.assign({}, state);
    newState.isMenuOpen = !newState.isMenuOpen;
    setState(newState);
  };

  const searchIconHandler = (): void => {
    const newState = Object.assign({}, state);
    newState.isSearchActive = !newState.isSearchActive;
    setState(newState);
  };

  return (
    <>
      <DefaultMeta title={title} description={description} />
      <div className="flex">
        <aside
          className={classNames(
            'flex',
            'flex-col',
            'h-screen',
            'w-72',
            'border-r',
            'overflow-hidden',
            'fixed',
            'transition-all',
            { ['w-16']: !state.isMenuOpen },
          )}
        >
          <div className="flex items-center h-16 border-b">
            <div className="flex-none w-[63px]">
              <Image src={'/img/logo/logo.png'} width={63} height={58} alt={'logo'} />
            </div>
            <h1 className="flex-1 text-lg font-bold font-mono from-gray-200">Adminator</h1>
          </div>
          <ul className="overflow-y-scroll">
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
          </ul>
        </aside>
        <div
          className={classNames('flex', 'flex-col', 'flex-1', 'h-screen', 'pl-72', 'transition-all', {
            ['pl-16']: !state.isMenuOpen,
          })}
        >
          <header className="border-b w-full h-16 bg-white">
            <div className="flex items-center h-full">
              <MenuIcon className="ml-4" onClick={menuIconHandler} width="24" height="24" />
              <div className={classNames('ml-4', { ['hidden']: state.isSearchActive })} onClick={searchIconHandler}>
                <SearchIcon />
              </div>
              <form className={classNames('flex', 'ml-4', { ['hidden']: !state.isSearchActive })}>
                <CrossIcon className="mr-1" onClick={searchIconHandler} />
                <input className="w-72 border-b" type="text" placeholder="Search..." />
                <button className="bg-blue-800 text-white rounded-md px-2 ml-2" type="submit">
                  検索
                </button>
              </form>
            </div>
          </header>
          <main className="flex flex-col flex-1 overflow-y-scroll">
            <div className="flex-grow">{children}</div>
            <footer className="border-t">footer</footer>
          </main>
        </div>
      </div>
    </>
  );
};

/**
 * Type
 */
type Props = {
  title: string;
  description: string;
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultLayout;
