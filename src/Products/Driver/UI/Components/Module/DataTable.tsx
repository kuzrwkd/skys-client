/**
 * React
 */
import { FC, forwardRef, Ref } from 'react';

/**
 * Next
 */
import Link from 'next/link';

/**
 * SVG
 */
import IsoscelesIcon from '@/Products/Driver/UI/Icon/isosceles.svg';

/**
 * Constructor
 * @param titles
 * @constructor
 */
const DataTable: FC<Props & { ref: Ref<HTMLTableSectionElement> }> = forwardRef(({ children, rows, col }, ref) => {
  const method = {
    renderHeaderRow() {
      return (
        <tr className="border-b border-gray-600">
          {rows.map((name, i) => {
            return (
              <th className="text-sm border-r-2 border-gray-200 last:border-r first:border-l text-left p-2" key={i}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => this.handleSort(name)}>
                  <div>{name}</div>
                  <div className="flex flex-col">
                    <IsoscelesIcon className="fill-current text-gray-200 mb-0.5" />
                    <IsoscelesIcon className="transform rotate-180 fill-current text-gray-200" />
                  </div>
                </div>
              </th>
            );
          })}
        </tr>
      );
    },

    renderFooterRow() {
      return (
        <tr className="text-sm border-t border-gray-200">
          {rows.map((name, i) => {
            return (
              <th className="border-r-2 border-gray-200 last:border-r first:border-l text-left p-2" key={i}>
                {name}
              </th>
            );
          })}
        </tr>
      );
    },

    async handleSort(name: string) {
      await console.log(name);
    },
  };

  return (
    <>
      <table className="w-full">
        <thead>{method.renderHeaderRow()}</thead>
        <tbody ref={ref} data-newsfeed={JSON.stringify(col)}>
          {children}
        </tbody>
        <tfoot>{method.renderFooterRow()}</tfoot>
      </table>
      <div className="flex justify-between mt-8">
        <div className="text-sm">Showing 1 to 40 of 57 entries</div>
        <div>
          <Link href="/newsfeed?p=1">
            <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2 mr-4">
              Previous
            </a>
          </Link>
          <span>
            <Link href="/newsfeed?p=1">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2">
                1
              </a>
            </Link>
            <Link href="/newsfeed?p=2">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2">
                2
              </a>
            </Link>
            <Link href="/newsfeed?p=3">
              <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2">
                3
              </a>
            </Link>
          </span>
          <Link href="/newsfeed?p=2">
            <a className="text-sm transition-all border border-transparent hover:bg-indigo-500 hover:text-white hover:rounded-sm hover:border-black px-4 py-2 mr-2   ml-4">
              Next
            </a>
          </Link>
        </div>
      </div>
    </>
  );
});

/**
 * Type
 */
type Props = {
  rows: string[];
  col: any;
};

DataTable.displayName = 'DataTable';

export default DataTable;
