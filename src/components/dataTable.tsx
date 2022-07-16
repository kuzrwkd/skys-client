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
  type TTailwindString,
  transitionProperty,
  backgroundColor,
  borderRadius,
} from 'tailwindcss-classnames';

import IsoscelesIcon from '../static/icon/isosceles.svg';

import SearchBox from '@/components/searchBox';

const classesTableHeader = {
  tr: classnames(borderWidth('border-b'), borderColor('border-gray-300')),
  th: classnames(fontSize('text-sm'), textAlign('text-left'), padding('p-2')),
  thContentsWrap: classnames(display('flex'), alignItems('items-center'), justifyContent('justify-between')),
  thTitle: classnames(cursor('cursor-pointer')),
  sortIconWrap: classnames(display('flex'), flexDirection('flex-col')),
  sortIconUpper: classnames(fill('fill-current'), textColor('text-gray-300'), margin('mb-0.5')),
  sortIconLower: classnames(fill('fill-current'), textColor('text-gray-300'), rotate('rotate-180'), textTransform()),
};

const TableHeader: FC<HeaderColProps> = (props) => {
  const { cells } = props;
  const handleSort = async (value: string) => {
    await console.log(value);
  };

  return (
    <tr className={classesTableHeader.tr}>
      {cells.map((value, i) => {
        return (
          <th className={classesTableHeader.th} key={i}>
            <div className={classesTableHeader.thContentsWrap} onClick={() => handleSort(value)}>
              <div className={classesTableHeader.thTitle}>{value}</div>
              <div className={classesTableHeader.sortIconWrap}>
                <IsoscelesIcon className={classesTableHeader.sortIconUpper} />
                <IsoscelesIcon className={classesTableHeader.sortIconLower} />
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

const classesTableFooter = {
  tr: classnames(fontSize('text-sm'), borderWidth('border-t'), borderColor('border-gray-300')),
  th: classnames(textAlign('text-left'), padding('p-2')),
};

const TableFooter: FC<FooterColProps> = (props) => {
  const { cells } = props;
  return (
    <tr className={classesTableFooter.tr}>
      {cells.map((value, i) => {
        return (
          <th className={classesTableFooter.th} key={i}>
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

const classesDataTable = {
  table: classnames(width('w-full'), margin('mt-8')),
};

const classesDataTableOptions = {
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
};

const DataTable: FC<DataTableProps> = (props) => {
  const { children, cells, redirect } = props;
  const displayNumbers = [10, 50, 100, 1000];
  return (
    <>
      <div className={classesDataTableOptions.contentsWrap}>
        <div className={classesDataTableOptions.selectBoxWrap}>
          <span className={classesDataTableOptions.infoText}>Show&nbsp;</span>
          <select className={classesDataTableOptions.selectBox} name="example">
            {displayNumbers.map((value, i) => (
              <option value={value} key={i}>
                {value}
              </option>
            ))}
          </select>
          <span className={classesDataTableOptions.infoText}>&nbsp;entries</span>
        </div>
        <SearchBox redirect={redirect} displayForm={true} />
      </div>
      <table className={classesDataTable.table}>
        <thead>
          <TableHeader cells={cells} />
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <TableFooter cells={cells} />
        </tfoot>
      </table>
      <div className={classesDataTableOptions.pagination.wrap}>
        <div className={classesDataTableOptions.infoText}>Showing 1 to 40 of 57 entries</div>
        <div>
          <Link href="/newsfeed?p=1">
            <a className={classesDataTableOptions.pagination.button(classnames(margin('mr-2', 'mr-4')))}>&laquo;</a>
          </Link>
          <span>
            <Link href="/newsfeed?p=1">
              <a className={classesDataTableOptions.pagination.button(classnames(margin('mr-2')))}>1</a>
            </Link>
            <Link href="/newsfeed?p=2">
              <a className={classesDataTableOptions.pagination.button(classnames(margin('mr-2')))}>2</a>
            </Link>
            <Link href="/newsfeed?p=3">
              <a className={classesDataTableOptions.pagination.button()}>3</a>
            </Link>
          </span>
          <Link href="/newsfeed?p=2">
            <a className={classesDataTableOptions.pagination.button(classnames(margin('mr-2', 'ml-4')))}>&raquo;</a>
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
