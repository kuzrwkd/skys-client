import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NuxtLink from 'next/link';
import React, { useState, ReactNode } from 'react';
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

import LeftSideMenu from './leftSideMenu';

type DefaultLayoutProps = {
  children: ReactNode;
};

const classesDefaultLayout = {
  root: classnames(display('flex')),
  leftAside: (isMenuOpen: boolean) =>
    classnames(
      display('flex'),
      flexDirection('flex-col'),
      height('h-screen'),
      width('w-16', { ['w-52']: isMenuOpen }),
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
  userIconWrap: classnames(display('flex'), alignItems('items-center'), height('h-full')),
  userIcon: classnames(textColor('text-gray-500'), cursor('cursor-pointer'), margin('mr-4')),
  main: classnames(display('flex'), flexDirection('flex-col'), flex('flex-1'), overflow('overflow-y-scroll')),
  contents: classnames(flexGrow('grow'), backgroundColor('bg-gray-50'), padding('p-4')),
  contentsLayout: classnames(display('flex'), width('w-full')),
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

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(true);

  const mainMenuIconHandler = () => {
    setLeftMenuOpen(!isLeftMenuOpen);
  };

  return (
    <>
      <div className={classesDefaultLayout.root}>
        <aside className={classesDefaultLayout.leftAside(isLeftMenuOpen)}>
          <div className={classesDefaultLayout.linkWrap}>
            <NuxtLink href="/">
              <a className={classesDefaultLayout.link}>
                <div className={classesDefaultLayout.logoWrap}>
                  <LogoIcon width={64} height={58} />
                </div>
                <h1 className={classesDefaultLayout.logoTitle}>SKYS</h1>
              </a>
            </NuxtLink>
          </div>
          <LeftSideMenu open={isLeftMenuOpen} />
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
            </div>
            <div className={classesDefaultLayout.userIconWrap}>
              <AccountCircleIcon className={classesDefaultLayout.userIcon} width="24" height="24" />
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
