/**
 * React
 */
import { FC, forwardRef, Ref } from 'react';

/**
 * SVG
 */
import IsoscelesIcon from '@/Products/Driver/UI/Icon/isosceles.svg';

/**
 * Constructor
 * @param titles
 * @constructor
 */
const DataTable: FC<Props & { ref: Ref<HTMLTableSectionElement> }> = forwardRef(({ children, rows, data }, ref) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-600">
          {rows.map((name, i) => {
            return (
              <th className="border-r-2 border-gray-200 last:border-r first:border-l text-left p-2" key={i}>
                <div className="flex items-center justify-between">
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
      </thead>
      <tbody ref={ref} data-newsfeed={JSON.stringify(data)}>
        {children}
      </tbody>
      <tfoot>
        <tr className="border-t border-gray-200">
          {rows.map((name, i) => {
            return (
              <th className="border-r-2 border-gray-200 last:border-r first:border-l text-left p-2" key={i}>
                {name}
              </th>
            );
          })}
        </tr>
      </tfoot>
    </table>
  );
});

/**
 * Type
 */
type Props = {
  rows: string[];
  data: NewsFeed.Entity[];
};

DataTable.displayName = 'DataTable';

export default DataTable;
