import Link from 'next/link';
import { FC, ReactNode } from 'react';
import {
  classnames,
  borderWidth,
  borderColor,
  fontSize,
  textAlign,
  padding,
  display,
  alignItems,
  justifyContent,
  cursor,
  flexDirection,
  fill,
  textColor,
  margin,
  rotate,
  textTransform,
  width,
  transitionProperty,
  backgroundColor,
  borderRadius,
  type TTailwindString,
} from 'tailwindcss-classnames';

import IsoscelesIcon from '../static/icon/isosceles.svg';

import SearchBox from '@/components/searchBox';

const classes = {
  header: {
    tr: classnames(borderWidth('border-b'), borderColor('border-gray-300')),
    th: classnames(
      fontSize('text-sm'),
      borderWidth('border-r-2', 'last:border-r', 'first:border-l'),
      borderColor('border-gray-300'),
      textAlign('text-left'),
      padding('p-2'),
    ),
    thContentsWrap: classnames(
      display('flex'),
      alignItems('items-center'),
      justifyContent('justify-between'),
      cursor('cursor-pointer'),
    ),
    sortIconWrap: classnames(display('flex'), flexDirection('flex-col')),
    sortIconUpper: classnames(fill('fill-current'), textColor('text-gray-300'), margin('mb-0.5')),
    sortIconLower: classnames(fill('fill-current'), textColor('text-gray-300'), rotate('rotate-180'), textTransform()),
  },
  footer: {
    tr: classnames(fontSize('text-sm'), borderWidth('border-t'), borderColor('border-gray-300')),
    th: classnames(
      borderWidth('border-r-2', 'last:border-r', 'first:border-l'),
      borderColor('border-gray-300'),
      textAlign('text-left'),
      padding('p-2'),
    ),
  },
  table: classnames(width('w-full'), margin('mt-8')),
  tableOptions: {
    contentsWrap: classnames(display('flex'), justifyContent('justify-between'), alignItems('items-end')),
    selectBoxWrap: classnames(display('flex'), alignItems('items-end')),
    selectBox: classnames(fontSize('text-sm'), borderWidth('border'), borderColor('border-gray-300'), padding('p-1')),
    infoText: classnames(fontSize('text-sm')),
    pagination: {
      wrap: classnames(display('flex'), justifyContent('justify-between'), margin('mt-8')),
      button: (style?: TTailwindString) =>
        classnames(
          style,
          fontSize('text-sm'),
          textColor('hover:text-white'),
          transitionProperty('transition-all'),
          borderWidth('border'),
          borderColor('border-transparent', 'hover:border-black'),
          backgroundColor('hover:bg-indigo-500'),
          borderRadius('hover:rounded-sm'),
          padding('px-4', 'py-2'),
        ),
      previous: (style: TTailwindString) => classnames(style, margin('mr-2', 'mr-4')),
      next: (style: TTailwindString) => classnames(style, margin('mr-2', 'ml-4')),
    },
  },
};

const HeaderCol: FC<HeaderColProps> = (props) => {
  const { cells } = props;
  const handleSort = async (value: string) => {
    await console.log(value);
  };

  return (
    <tr className={classes.header.tr}>
      {cells.map((value, i) => {
        return (
          <th className={classes.header.th} key={i}>
            <div className={classes.header.thContentsWrap} onClick={() => handleSort(value)}>
              <div>{value}</div>
              <div className={classes.header.sortIconWrap}>
                <IsoscelesIcon className={classes.header.sortIconUpper} />
                <IsoscelesIcon className={classes.header.sortIconLower} />
              </div>
            </div>
          </th>
        );
      })}
    </tr>
  );
};

type HeaderColProps = {
  cells: string[];
};

const FooterCol: FC<FooterColProps> = (props) => {
  const { cells } = props;
  return (
    <tr className={classes.footer.tr}>
      {cells.map((value, i) => {
        return (
          <th className={classes.footer.th} key={i}>
            {value}
          </th>
        );
      })}
    </tr>
  );
};

type FooterColProps = {
  cells: string[];
};

const DataTable: FC<DataTableProps> = (props) => {
  const { children, cells, redirect } = props;
  const displayNumbers = [10, 50, 100, 1000];
  return (
    <>
      <div className={classes.tableOptions.contentsWrap}>
        <div className={classes.tableOptions.selectBoxWrap}>
          <span className={classes.tableOptions.infoText}>Show&nbsp;</span>
          <select className={classes.tableOptions.selectBox} name="example">
            {displayNumbers.map((value, i) => (
              <option value={value} key={i}>
                {value}
              </option>
            ))}
          </select>
          <span className={classes.tableOptions.infoText}>&nbsp;entries</span>
        </div>
        <SearchBox redirect={redirect} displayForm={true} />
      </div>
      <table className={classes.table}>
        <thead>
          <HeaderCol cells={cells} />
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <FooterCol cells={cells} />
        </tfoot>
      </table>
      <div className={classes.tableOptions.pagination.wrap}>
        <div className={classes.tableOptions.infoText}>Showing 1 to 40 of 57 entries</div>
        <div>
          <Link href="/newsfeed?p=1">
            <a className={classes.tableOptions.pagination.button(classnames(margin('mr-2', 'mr-4')))}>&laquo;</a>
          </Link>
          <span>
            <Link href="/newsfeed?p=1">
              <a className={classes.tableOptions.pagination.button(classnames(margin('mr-2')))}>1</a>
            </Link>
            <Link href="/newsfeed?p=2">
              <a className={classes.tableOptions.pagination.button(classnames(margin('mr-2')))}>2</a>
            </Link>
            <Link href="/newsfeed?p=3">
              <a className={classes.tableOptions.pagination.button()}>3</a>
            </Link>
          </span>
          <Link href="/newsfeed?p=2">
            <a className={classes.tableOptions.pagination.button(classnames(margin('mr-2', 'ml-4')))}>&raquo;</a>
          </Link>
        </div>
      </div>
    </>
  );
};

type DataTableProps = {
  children: ReactNode;
  cells: string[];
  redirect: string;
};

export default DataTable;
