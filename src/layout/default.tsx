import Link from 'next/link';
import React, { useState, createElement, FC, ReactNode } from 'react';
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
  padding,
  margin,
  alignItems,
  textColor,
  fontSize,
  fontWeight,
  fontFamily,
  gradientColorStops,
  justifyContent,
  backgroundColor,
  cursor,
  flexGrow,
  textAlign,
} from 'tailwindcss-classnames';

import LogoIcon from '../static/icon/logo.svg';
import MenuLeftIcon from '../static/icon/menuLeft.svg';
import MenuRightIcon from '../static/icon/menuRight.svg';
import UserIcon from '../static/icon/user.svg';

import SearchBox from '@/components/searchBox';
import { MAIN_MENU } from '@/types/meinMenu';

type DefaultLayoutProps = {
  children: ReactNode;
};

const classesMenu = {
  menu: classnames(padding('pt-5'), margin('ml-5')),
  item: classnames(margin('mt-4')),
  link: classnames(display('inline-flex'), alignItems('items-center')),
  iconWrap: classnames(flex('flex-none'), margin('mr-5')),
  icon: classnames(textColor('text-indigo-700')),
  text: classnames(flex('flex-none'), textColor('text-gray-500', 'hover:text-gray-900')),
};

const Menu: FC = () => {
  return (
    <ul className={classesMenu.menu}>
      {MAIN_MENU.map(({ name, href, icon }, i) => {
        return (
          <li className={classesMenu.item} key={i}>
            <Link href={href}>
              <a className={classesMenu.link}>
                <div className={classesMenu.iconWrap}>
                  {createElement(icon, {
                    width: 24,
                    height: 24,
                    className: classesMenu.icon,
                  })}
                </div>
                <span className={classesMenu.text}>{name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const classesDefaultLayout = {
  root: classnames(display('flex')),
  leftAside: (isMenuOpen: boolean) =>
    classnames(
      display('flex'),
      flexDirection('flex-col'),
      height('h-screen'),
      width('w-48', { ['w-16']: !isMenuOpen }),
      borderWidth('border-r'),
      borderColor('border-gray-300'),
      overflow('overflow-hidden'),
      transitionProperty('transition-all'),
    ),
  linkWrap: classnames(height('h-16'), borderWidth('border-b'), borderColor('border-gray-300')),
  link: classnames(display('inline-flex'), alignItems('items-center')),
  logoWrap: classnames(flex('flex-none'), width('w-16')),
  logoTitle: classnames(
    flex('flex-1'),
    fontSize('text-lg'),
    fontWeight('font-bold'),
    fontFamily('font-mono'),
    gradientColorStops('from-gray-200'),
  ),
  contentsRoot: classnames(
    display('flex'),
    flexDirection('flex-col'),
    flex('flex-1'),
    height('h-screen'),
    transitionProperty('transition-all'),
  ),
  header: classnames(
    display('flex'),
    justifyContent('justify-between'),
    borderWidth('border-b'),
    borderColor('border-gray-300'),
    width('w-full'),
    height('h-16'),
    backgroundColor('bg-white'),
  ),
  headerLeftContentsWrap: classnames(display('flex'), alignItems('items-center'), height('h-full')),
  toggleMenuIcon: classnames(textColor('text-gray-500'), cursor('cursor-pointer'), margin('ml-4')),
  searchBoxWrap: classnames(margin('ml-4')),
  userIconWrap: classnames(display('flex'), alignItems('items-center'), height('h-full')),
  userIcon: classnames(textColor('text-gray-500'), cursor('cursor-pointer'), margin('mr-4')),
  main: classnames(display('flex'), flexDirection('flex-col'), flex('flex-1'), overflow('overflow-y-scroll')),
  contents: classnames(flexGrow('grow'), backgroundColor('bg-gray-50'), padding('p-4')),
  contentsLayout: classnames(display('flex')),
  footer: classnames(borderWidth('border-t'), borderColor('border-gray-300')),
  copyWrap: classnames(textAlign('text-right'), padding('px-4')),
  rightAside: classnames(
    display('flex'),
    flexDirection('flex-col'),
    height('h-screen'),
    borderWidth('border-l'),
    borderColor('border-gray-300'),
    overflow('overflow-hidden'),
    transitionProperty('transition-all'),
    width('w-16'),
  ),
  rightAsideIconWrap: classnames(
    display('inline-flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    height('h-16'),
    width('w-full'),
    borderWidth('border-b'),
    borderColor('border-gray-300'),
  ),
  rightAsideIcon: classnames(textColor('text-gray-500'), cursor('cursor-pointer')),
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [state, setState] = useState({
    isMainMenuOpen: true,
  });

  const mainMenuIconHandler = () => {
    setState({ ...state, isMainMenuOpen: !state.isMainMenuOpen });
  };

  return (
    <>
      <div className={classesDefaultLayout.root}>
        <aside className={classesDefaultLayout.leftAside(state.isMainMenuOpen)}>
          <div className={classesDefaultLayout.linkWrap}>
            <Link href="/">
              <a className={classesDefaultLayout.link}>
                <div className={classesDefaultLayout.logoWrap}>
                  <LogoIcon width={64} height={58} />
                </div>
                <h1 className={classesDefaultLayout.logoTitle}>SKYS</h1>
              </a>
            </Link>
          </div>
          <Menu />
        </aside>
        <div className={classesDefaultLayout.contentsRoot}>
          <header className={classesDefaultLayout.header}>
            <div className={classesDefaultLayout.headerLeftContentsWrap}>
              <MenuLeftIcon
                className={classesDefaultLayout.toggleMenuIcon}
                onClick={mainMenuIconHandler}
                width="24"
                height="24"
              />
              <div className={classesDefaultLayout.searchBoxWrap}>
                <SearchBox redirect="search" />
              </div>
            </div>
            <div className={classesDefaultLayout.userIconWrap}>
              <UserIcon className={classesDefaultLayout.userIcon} width="24" height="24" />
            </div>
          </header>
          <main className={classesDefaultLayout.main}>
            <div className={classesDefaultLayout.contents}>
              <div className={classesDefaultLayout.contentsLayout}>{children}</div>
            </div>
            <footer className={classesDefaultLayout.footer}>
              <div className={classesDefaultLayout.copyWrap}>
                <small>&copy; Masudaya inc.</small>
              </div>
            </footer>
          </main>
        </div>
        <aside className={classesDefaultLayout.rightAside}>
          <div className={classesDefaultLayout.rightAsideIconWrap}>
            <MenuRightIcon className={classesDefaultLayout.rightAsideIcon} width="24" height="24" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default DefaultLayout;
