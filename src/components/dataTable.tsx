/**
 * React
 */
import { FC } from 'react';

/**
 * Next
 */
import Link from 'next/link';

/**
 * SVG
 */
import IsoscelesIcon from '@/static/icon/isosceles.svg';

/**
 * Components
 */
import SearchBox from '@/components/searchBox';

/*****************************************************
 * Header
 *****************************************************/
const HeaderCol: FC<HeaderColProps> = ({ col }) => {
  const handleSort = async (name: string) => {
    await console.log(name);
  };

  return (
    <tr className="border-b border-gray-300">
      {col.map((name, i) => {
        return (
          <th className="text-sm border-r-2 border-gray-300 last:border-r first:border-l text-left p-2" key={i}>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleSort(name)}>
              <div>{name}</div>
              <div className="flex flex-col">
                <IsoscelesIcon className="fill-current text-gray-300 mb-0.5" />
                <IsoscelesIcon className="transform rotate-180 fill-current text-gray-300" />
              </div>
            </div>
          </th>
        );
      })}
    </tr>
  );
};

/**
 * Type
 */
type HeaderColProps = {
  col: string[];
};

/*****************************************************
 * Footer
 *****************************************************/
const FooterCol: FC<FooterColProps> = ({ col }) => {
  return (
    <tr className="text-sm border-t border-gray-300">
      {col.map((name, i) => {
        return (
          <th className="border-r-2 border-gray-300 last:border-r first:border-l text-left p-2" key={i}>
            {name}
          </th>
        );
      })}
    </tr>
  );
};

/**
 * Type
 */
type FooterColProps = {
  col: string[];
};

/******************************************************
 * DataTable
 * @constructor
 *****************************************************/
const DataTable: FC<DataTableProps> = ({ children, col, redirect }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <span className="text-sm">Show&nbsp;</span>
          <select className="text-sm border border-gray-300 p-1" name="example">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="1000">1000</option>
          </select>
          <span className="text-sm">&nbsp;entries</span>
        </div>
        <SearchBox redirect={redirect} displayForm={true} />
      </div>
      <table className="w-full mt-8">
        <thead>
          <HeaderCol col={col} />
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <FooterCol col={col} />
        </tfoot>
      </table>
      <div className="flex justify-between mt-8">
        <div className="text-sm">Showing 1 to 40 of 57 entries</div>
        <div>
          <Link href="/src/pages/newsfeed?p=1">
            <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2 mr-4">
              &laquo;
            </a>
          </Link>
          <span>
            <Link href="/src/pages/newsfeed?p=1">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2">
                1
              </a>
            </Link>
            <Link href="/src/pages/newsfeed?p=2">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2">
                2
              </a>
            </Link>
            <Link href="/src/pages/newsfeed?p=3">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2">
                3
              </a>
            </Link>
          </span>
          <Link href="/src/pages/newsfeed?p=2">
            <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2   ml-4">
              &raquo;
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

/**
 * Type
 */
type DataTableProps = {
  col: string[];
  redirect: string;
};

export default DataTable;
