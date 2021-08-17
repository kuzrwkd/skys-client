/**
 * React
 */
import React, { useState, createElement } from 'react';

/**
 * Next
 */
import Link from 'next/link';

/**
 * Lib
 */
import PropTypes from 'prop-types';
import classNames from 'tailwindcss-classnames';

/**
 * Components
 */
import DefaultMeta from '@/Products/Driver/UI/Components/Meta/DefaultMeta';
import SearchBox from '@/Products/Driver/UI/Components/Module/SearchBox';

/**
 * Svg
 */
import LogoIcon from '@/Products/Driver/UI/Icon/logo.svg';
import MenuIcon from '@/Products/Driver/UI/Icon/menu.svg';

/**
 * Constants
 */
import { MENU } from '@/Tools/Constants/mainMenu';

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

  const dom = {
    renderMenu() {
      return (
        <ul className="overflow-y-scroll mt-5 ml-5">
          {MENU.map(({ name, href, icon, className }, i) => {
            return (
              <li className="mt-4" key={i}>
                <Link href={href}>
                  <a className="inline-flex items-center">
                    <div className="flex-none mr-5">{createElement(icon, { width: 24, height: 24, className })}</div>
                    <span>{name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    },
  };

  const method = {
    menuIconHandler() {
      setState({ ...state, isMenuOpen: !state.isMenuOpen });
    },
    searchIconHandler() {
      setState({ ...state, isSearchActive: !state.isSearchActive });
    },
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
              <LogoIcon width={63} height={58} />
            </div>
            <h1 className="flex-1 text-lg font-bold font-mono from-gray-200">SKYS</h1>
          </div>
          {dom.renderMenu()}
        </aside>
        <div
          className={classNames('flex', 'flex-col', 'flex-1', 'h-screen', 'pl-72', 'transition-all', {
            ['pl-16']: !state.isMenuOpen,
          })}
        >
          <header className="border-b w-full h-16 bg-white">
            <div className="flex items-center h-full">
              <MenuIcon className="cursor-pointer ml-4" onClick={method.menuIconHandler} width="24" height="24" />
              <SearchBox searchIconHandler={method.searchIconHandler} isSearchActive={state.isSearchActive} />
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
