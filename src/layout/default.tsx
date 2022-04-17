/**
 * React
 */
import React, { useState, createElement, FC } from 'react';

/**
 * Next
 */
import Link from 'next/link';

/**
 * Lib
 */
import {
  classnames,
  display,
  flexDirection,
  height,
  borderWidth,
  borderColor,
  overflow,
  transitionProperty,
  width,
  flex,
} from 'tailwindcss-classnames';

/**
 * Components
 */
import SearchBox from '@/components/searchBox';

/**
 * Svg
 */
import LogoIcon from '@/static/icon/logo.svg';
import MenuLeftIcon from '@/static/icon/menuLeft.svg';
import MenuRightIcon from '@/static/icon/menuRight.svg';
import UserIcon from '@/static/icon/user.svg';

/**
 * Constants
 */
import { MAIN_MENU } from '@/types/meinMenu';

/*****************************************************
 * MainMenu
 * @constructor
 *****************************************************/
const MainMenu: FC = () => {
  return (
    <ul className="pt-5 ml-5">
      {MAIN_MENU.map(({ name, href, icon }, i) => {
        return (
          <li className="mt-4" key={i}>
            <Link href={href}>
              <a className="inline-flex items-center">
                <div className="flex-none mr-5">
                  {createElement(icon, {
                    width: 24,
                    height: 24,
                    className: 'text-indigo-700',
                  })}
                </div>
                <span className="flex-none text-gray-500 hover:text-gray-900">{name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

/*****************************************************
 * DefaultLayout
 * @param children
 * @constructor
 *****************************************************/

const DefaultLayout: React.FC = ({ children }) => {
  const [state, setState] = useState({
    isMainMenuOpen: true,
  });

  const mainMenuIconHandler = () => {
    setState({ ...state, isMainMenuOpen: !state.isMainMenuOpen });
  };

  return (
    <>
      <div className="flex">
        <aside
          className={classnames(
            display('flex'),
            flexDirection('flex-col'),
            height('h-screen'),
            width('w-48', { ['w-16']: !state.isMainMenuOpen }),
            borderWidth('border-r'),
            borderColor('border-gray-300'),
            overflow('overflow-hidden'),
            transitionProperty('transition-all'),
          )}
        >
          <div className="h-16 border-b border-gray-300">
            <Link href="/">
              <a className="inline-flex items-center">
                <div className="flex-none w-[63px]">
                  <LogoIcon width={63} height={58} />
                </div>
                <h1 className="flex-1 text-lg font-bold font-mono from-gray-200">SKYS</h1>
              </a>
            </Link>
          </div>
          <MainMenu />
        </aside>
        <div
          className={classnames(
            display('flex'),
            flexDirection('flex-col'),
            flex('flex-1'),
            height('h-screen'),
            transitionProperty('transition-all'),
          )}
        >
          <header className="flex justify-between border-b border-gray-300 w-full h-16 bg-white">
            <div className="flex items-center h-full">
              <MenuLeftIcon
                className="text-gray-500 cursor-pointer ml-4"
                onClick={mainMenuIconHandler}
                width="24"
                height="24"
              />
              <div className="ml-4">
                <SearchBox redirect="search" />
              </div>
            </div>
            <div className="flex items-center h-full">
              <UserIcon className="text-gray-500 cursor-pointer mr-4" width="24" height="24" />
            </div>
          </header>
          <main className="flex flex-col flex-1 overflow-y-scroll">
            <div className="flex-grow bg-gray-50 p-4">{children}</div>
            <footer className="border-t border-gray-300">
              <div className="text-right px-4">
                <small>&copy; Masudaya inc.</small>
              </div>
            </footer>
          </main>
        </div>
        <aside
          className={classnames(
            display('flex'),
            flexDirection('flex-col'),
            height('h-screen'),
            borderWidth('border-l'),
            borderColor('border-gray-300'),
            overflow('overflow-hidden'),
            transitionProperty('transition-all'),
            width('w-16'),
          )}
        >
          <div className="inline-flex items-center justify-center h-16 w-full border-b border-gray-300">
            <MenuRightIcon className="text-gray-500 cursor-pointer" width="24" height="24" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default DefaultLayout;
