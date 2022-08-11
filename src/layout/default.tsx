import { IconButton } from '@mui/material';
import NuxtLink from 'next/link';
import React from 'react';
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
  alignItems,
  fontSize,
  fontWeight,
  fontFamily,
  gradientColorStops,
  justifyContent,
  backgroundColor,
  flexGrow,
  textAlign,
} from 'tailwindcss-classnames';

import LogoIcon from '../static/icon/logo.svg';
import MenuLeftIcon from '../static/icon/menuLeft.svg';
import MenuRightIcon from '../static/icon/menuRight.svg';

import LeftSideMenu from './leftSideMenu';
import UserMenu from './userMenu';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const classes = {
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
  userIconWrap: classnames(display('flex'), alignItems('items-center'), height('h-full')),
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
};

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  const [isLeftMenuOpen, setLeftMenuOpen] = React.useState(true);

  const mainMenuIconHandler = () => {
    setLeftMenuOpen(!isLeftMenuOpen);
  };

  return (
    <div className={classes.root}>
      <aside className={classes.leftAside(isLeftMenuOpen)}>
        <div className={classes.linkWrap}>
          <NuxtLink href="/">
            <a className={classes.link}>
              <div className={classes.logoWrap}>
                <LogoIcon width={64} height={58} />
              </div>
              <h1 className={classes.logoTitle}>SKYS</h1>
            </a>
          </NuxtLink>
        </div>
        <LeftSideMenu open={isLeftMenuOpen} />
      </aside>
      <div className={classes.contentsRoot}>
        <header className={classes.header}>
          <div className={classes.headerLeftContentsWrap}>
            <IconButton sx={{ ml: 2 }} onClick={mainMenuIconHandler}>
              <MenuLeftIcon />
            </IconButton>
          </div>
          <div className={classes.userIconWrap}>
            <UserMenu />
          </div>
        </header>
        <main className={classes.main}>
          <div className={classes.contents}>
            <div className={classes.contentsLayout}>{children}</div>
          </div>
          <footer className={classes.footer}>
            <div className={classes.copyWrap}>
              <small>&copy; Masudaya inc.</small>
            </div>
          </footer>
        </main>
      </div>
      <aside className={classes.rightAside}>
        <div className={classes.rightAsideIconWrap}>
          <IconButton>
            <MenuRightIcon width="24" height="24" />
          </IconButton>
        </div>
      </aside>
    </div>
  );
};

export default DefaultLayout;
